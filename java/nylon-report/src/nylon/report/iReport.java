/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package nylon.report;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import net.sf.jasperreports.engine.JRDataSource;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JsonDataSource;
import net.sf.jasperreports.engine.export.JRPdfExporter;
import net.sf.jasperreports.engine.export.HtmlExporter;
import net.sf.jasperreports.engine.export.JRXml4SwfExporter;
import net.sf.jasperreports.engine.export.JRCsvExporter;
import net.sf.jasperreports.engine.export.ooxml.JRDocxExporter;
import net.sf.jasperreports.engine.export.ooxml.JRXlsxExporter;
import net.sf.jasperreports.engine.util.JRLoader;
import net.sf.jasperreports.export.Exporter;
import net.sf.jasperreports.export.SimpleExporterInput;
import net.sf.jasperreports.export.SimpleHtmlExporterOutput;
import net.sf.jasperreports.export.SimpleOutputStreamExporterOutput;
import net.sf.jasperreports.export.SimpleWriterExporterOutput;
import net.sf.jasperreports.export.SimpleXmlExporterOutput;

/**
 *
 * @author SOMCHIT
 */
public class iReport {

    public iReport() {
      
    }

    public String export(String reportFile, String exportMode, String datas, String parameters) {
        try {
            Exporter exporter;
            JasperPrint jpPrint = this.jrPrint(reportFile, datas.getBytes("UTF-8"), parameters.getBytes("UTF-8"));
            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            switch (exportMode.toLowerCase()) {
                case "pdf":
                    exporter = new JRPdfExporter();
                    exporter.setExporterOutput(new SimpleOutputStreamExporterOutput(outputStream));
                    break;
                case "excel":
                    exporter = new JRXlsxExporter();
                    exporter.setExporterOutput(new SimpleOutputStreamExporterOutput(outputStream));
                    break;
                case "word":
                    exporter = new JRDocxExporter();
                    exporter.setExporterOutput(new SimpleOutputStreamExporterOutput(outputStream));
                    break;
                case "csv":
                    exporter = new JRCsvExporter();
                    exporter.setExporterOutput(new SimpleWriterExporterOutput(outputStream));
                    break;
                case "html":
                    exporter = new HtmlExporter();
                    exporter.setExporterOutput(new SimpleHtmlExporterOutput(outputStream));
                    break;
                case "xml":
                    exporter = new JRXml4SwfExporter();
                    exporter.setExporterOutput(new SimpleXmlExporterOutput(outputStream));
                    break;
                default:
                    exporter = new JRPdfExporter();
                    exporter.setExporterOutput(new SimpleOutputStreamExporterOutput(outputStream));
                    break;
            }

            exporter.setExporterInput(new SimpleExporterInput(jpPrint));
            //exporter.setExporterOutput(new SimpleOutputStreamExporterOutput(outputStream));

            exporter.exportReport();
            byte[] out = outputStream.toByteArray();
            return byteArrayToHex(out);
        } catch (JRException ex) {
            Logger.getLogger(iReport.class.getName()).log(Level.WARNING, ex.getMessage(), ex);

        } catch (IOException ex) {
            Logger.getLogger(iReport.class.getName()).log(Level.SEVERE, null, ex);
        }
        return byteArrayToHex(new byte[]{});
    }

    private JasperPrint jrPrint(String reportFile, byte[] datas, byte[] parameter) throws IOException {
        JasperReport jpReport;
        JRDataSource jpData;
        Map<String, Object> jpParam;
        try {
            FileInputStream reportStream = new FileInputStream(reportFile);
            jpData = new JsonDataSource(new ByteArrayInputStream(datas));
            jpParam = this.getParameter(parameter);
            if (reportFile.endsWith(".jrxml")) {
                jpReport = JasperCompileManager.compileReport(reportStream);
            } else {
                jpReport = (JasperReport) JRLoader.loadObject(reportStream);
            }
            JasperPrint jpPrint = JasperFillManager.fillReport(jpReport, jpParam, jpData);
            return jpPrint;
        } catch (JRException ex) {
            Logger.getLogger(iReport.class.getName()).log(Level.WARNING, ex.getMessage(), ex);
        }
        return null;
    }

    private Map<String, Object> getParameter(byte[] parameter) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        HashMap<String, Object> pms = objectMapper.readValue(
                new ByteArrayInputStream(parameter),
                new TypeReference<HashMap<String, Object>>() {
        }
        );
        return pms;
       // byte[] a;
      // Hex.encodeHexString( bytes ) 
    }
    
    public String byteArrayToHex(byte[] a) {
        StringBuilder sb = new StringBuilder(a.length * 2);
        for (byte b : a) {
            sb.append(String.format("%02x", b & 0xff));
        }
        return sb.toString();
    }

    /* public enum ExportMode {
        PDF,
        EXCEL,
        WORD,
        CSV,
        HTML,
        XML
    }*/
    //private InputStream ReportJrxml;
    //private String ReportJrxmlName;
    // private JasperPrint jpPrint;
    // private Object reportData;
    // private Object parameter;
    // private ExportMode exportMode = ExportMode.PDF;
    /* public byte[] export(String reportName, String type, byte[] data, byte[] parameter) {
        //System.out.println(System.getProperty("user.dir"));
        if (null == type.toLowerCase()) {
            exportMode = ExportMode.PDF;
        } else //  parameters = new HashMap<>();
        {
            switch (type.toLowerCase()) {
                case "pdf":
                    exportMode = ExportMode.PDF;
                    break;
                case "word":
                    exportMode = ExportMode.WORD;
                    break;
                case "excel":
                    exportMode = ExportMode.EXCEL;
                    break;
                case "csv":
                    exportMode = ExportMode.CSV;
                    break;
                case "html":
                    exportMode = ExportMode.HTML;
                    break;
                case "xml":
                    exportMode = ExportMode.XML;
                    break;
                default:
                    exportMode = ExportMode.PDF;
                    break;
            }
        }
        this.ReportJrxmlName = reportName;
        this.reportData = data;
        this.parameter = parameter;

        try {
            return byteArrayToHex(this.exporter());
        } catch (IOException ex) {
            Logger.getLogger(iReport.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }*/

 /*public String byteArrayToHex(byte[] a) {
        StringBuilder sb = new StringBuilder(a.length * 2);
        for (byte b : a) {
            sb.append(String.format("%02x", b & 0xff));
        }
        return sb.toString();
    }*/
//    public Map<String, Object> getParameter() {
//        return parameters;
//    }
    /*private Map<String, Object> getParameter() throws IOException {
        if (this.parameter.getClass() == String.class) {
            return this.getParameterFromJSON();
        } else {
            return this.getParameterFromObject();
        }
    }

    private Map<String, Object> getParameterFromObject() {
        Map<String, Object> pm = new HashMap<>();
        Class cls = parameter.getClass();
        while (cls != null) {
            Field[] fileds = cls.getDeclaredFields();
            int n = fileds.length;
            for (int j = 0; j < n; j++) {

                try {
                    if (!fileds[j].getName().equals("serialVersionUID")
                            && !fileds[j].getName().startsWith("jdo")) {
                        fileds[j].setAccessible(true);
                        pm.put(fileds[j].getName(), fileds[j].get(parameter));
                        fileds[j].setAccessible(false);
                    }
                } catch (SecurityException | IllegalArgumentException | IllegalAccessException ex) {
                    Logger.getLogger(iReport.class.getName()).log(Level.WARNING, ex.getMessage(), ex);
                }
            }
            cls = cls.getSuperclass();
        }
        return pm;

    }

    private Map<String, Object> getParameterFromJSON() throws IOException {
        // ObjectMapper objectMapper = new ObjectMapper();
        ObjectMapper objectMapper = new ObjectMapper();
        HashMap<String, Object> pms = objectMapper.readValue(this.parameter.toString(), new TypeReference<HashMap<String, Object>>() {
        });
        // Map<String, Object> pms = new HashMap<>();
        return pms;

        /* Map<String, Object> pms = new HashMap<>();
        JSONObject pm = null;
        try {
            pm = new JSONObject(parameter.toString());
            pms = this.getObjectJSON(pm);
            // Iterator e = pm.keys();
            //while (e.hasNext()) {
            //   String name = (String) e.next();
            //  try {
            //     pms.put(name, pm.get(name));
            // } catch (JSONException ex) {
            //   Logger.getLogger(iReport.class.getName()).log(Level.SEVERE, null, ex);
            // }
            //}
        } catch (JSONException ex) {
            Logger.getLogger(iReport.class.getName()).log(Level.SEVERE, null, ex);
        }
        return pms;*/
    // }
//    public void setParameter(Map<String, Object> parameters) {
//        this.parameters = parameters;
//    }
//
//    public ExportMode getExportMode() {
//        return exportMode;
//    }
//
//    public void setExportMode(ExportMode exportMode) {
//        this.exportMode = exportMode;
//    }
//
//    public InputStream getReportJrxml() {
//        return ReportJrxml;
//    }
//
//    public List<?> getReportData() {
//        return reportData;
//    }
//
//    public void setReportData(List<?> reportData) {
//        this.reportData = reportData;
//    }
//    public void setReport(String ReportJrxmlName) {
//        this.ReportJrxmlName = ReportJrxmlName;
//    }
//
//    public void setReport(InputStream ReportJrxml) {
//        this.ReportJrxml = ReportJrxml;
//    }
    /*private void getReport() throws IOException {
        try {
            this.ReportJrxml = new FileInputStream(this.ReportJrxmlName);
        } catch (FileNotFoundException ex) {
            Logger.getLogger(iReport.class.getName()).log(Level.SEVERE, null, ex);
        }
        if (this.ReportJrxmlName.endsWith(".jrxml")) {
            this.getReportJRXML();
        } else {
            this.getReportJASPER();
        }
    }*/

 /*private void getReportJASPER() {
        JasperReport jpReport;

        JRDataSource jpData;
        Map<String, Object> jpParam;
        try {
            jpData = this.getDataCollection();
            jpParam = this.getParameter();
            jpReport = (JasperReport) JRLoader.loadObject(this.ReportJrxml);
            jpPrint = JasperFillManager.fillReport(jpReport, jpParam, jpData);

        } catch (Exception ex) {
            Logger.getLogger(iReport.class.getName()).log(Level.WARNING, ex.getMessage(), ex);
        }
    }*/
//    public Object Export(Class _assembly, String CurrentPaht) {
//        this.ReportJrxml = _assembly.getResourceAsStream(this.ReportJrxmlName);
//        return this.Export();
//    }
    /* private byte[] exportToPdf() {

        try {
            if (this.jpPrint == null) {
                this.getReport();
            }
            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            JRPdfExporter exporter = null;
            exporter = new JRPdfExporter();
            exporter.setParameter(JRExporterParameter.JASPER_PRINT, jpPrint);
            exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, outputStream);
            exporter.exportReport();
            byte[] out = outputStream.toByteArray();
            return out;

        } catch (JRException ex) {
            Logger.getLogger(iReport.class.getName()).log(Level.WARNING, ex.getMessage(), ex);
            return null;
        }
    }*/

 /*  private byte[] exportToCsv() {

        try {
            if (this.jpPrint == null) {
                this.getReport();
            }
            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            JRCsvExporter exporter = null;
            exporter = new JRCsvExporter();
            exporter.setParameter(JRExporterParameter.JASPER_PRINT, jpPrint);
            exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, outputStream);
            exporter.exportReport();
            byte[] out = outputStream.toByteArray();
            return out;

        } catch (JRException ex) {
            Logger.getLogger(iReport.class.getName()).log(Level.WARNING, ex.getMessage(), ex);
            return null;
        }
    }*/

 /* private byte[] exportToHtml() {

        try {
            if (this.jpPrint == null) {
                this.getReport();
            }
            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            JRHtmlExporter exporter = null;
            exporter = new JRHtmlExporter();

            // HtmlReportConfiguration reportExportConfiguration = new SimpleHtmlReportConfiguration();
            //   reportExportConfiguration..set.setWhitePageBackground(true);
            //  reportExportConfiguration.setRemoveEmptySpaceBetweenRows(true);
            //  reportExportConfiguration.setEmbeddedSvgUseFonts(Boolean.TRUE);
            //  reportExportConfiguration.setEmbedImage(Boolean.TRUE);
            // reportExportConfiguration.set
            exporter.setParameter(JRExporterParameter.JASPER_PRINT, jpPrint);
            exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, outputStream);
            exporter.setParameter(JRHtmlExporterParameter.CHARACTER_ENCODING, "UTF-8");
            // exporter.setConfiguration(reportExportConfiguration);
            exporter.setParameter(JRHtmlExporterParameter., new HashMap());
            exporter.setParameter(JRHtmlExporterParameter.IMAGES_URI, "image?image=");
            exporter.exportReport();
            byte[] out = outputStream.toByteArray();
            return out;

        } catch (JRException ex) {
            Logger.getLogger(iReport.class.getName()).log(Level.WARNING, ex.getMessage(), ex);
            return null;
        }
    }*/

 /* private byte[] exportToXml() {

        try {
            if (this.jpPrint == null) {
                this.getReport();
            }
            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            JRXml4SwfExporter exporter = null;
            exporter = new JRXml4SwfExporter();
            exporter.setParameter(JRExporterParameter.JASPER_PRINT, jpPrint);
            exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, outputStream);
            exporter.exportReport();
            byte[] out = outputStream.toByteArray();
            return out;

        } catch (JRException ex) {
            Logger.getLogger(iReport.class.getName()).log(Level.WARNING, ex.getMessage(), ex);
            return null;
        }
    }*/

 /*  private byte[] exportToExcel() {
        {
            try {
                if (this.jpPrint == null) {
                    this.getReport();
                }
                ByteArrayOutputStream excelOutput = new ByteArrayOutputStream();
                JRXlsxExporter exporterXLS = new JRXlsxExporter();
                exporterXLS.setParameter(JRXlsExporterParameter.JASPER_PRINT, jpPrint);
                exporterXLS.setParameter(JRXlsExporterParameter.OUTPUT_STREAM, excelOutput);
                exporterXLS.setParameter(JRXlsExporterParameter.IS_ONE_PAGE_PER_SHEET, Boolean.FALSE);
                exporterXLS.setParameter(JRXlsExporterParameter.IS_WHITE_PAGE_BACKGROUND, Boolean.FALSE);
                exporterXLS.setParameter(JRXlsExporterParameter.IS_REMOVE_EMPTY_SPACE_BETWEEN_ROWS, Boolean.TRUE);
                exporterXLS.exportReport();
                byte[] out = excelOutput.toByteArray();

                return out;
            } catch (JRException ex) {
                Logger.getLogger(iReport.class.getName()).log(Level.WARNING, ex.getMessage(), ex);
            } finally {

            }
        }
        return null;
    }*/

 /* private byte[] exportToWord() {
        {
            try {
                if (this.jpPrint == null) {
                    this.getReport();
                }
                ByteArrayOutputStream excelOutput = new ByteArrayOutputStream();

                JRDocxExporter exporterXLS = new JRDocxExporter();
                exporterXLS.setParameter(JRXlsExporterParameter.JASPER_PRINT, jpPrint);
                exporterXLS.setParameter(JRXlsExporterParameter.OUTPUT_STREAM, excelOutput);
                exporterXLS.setParameter(JRXlsExporterParameter.IS_ONE_PAGE_PER_SHEET, Boolean.FALSE);
                exporterXLS.setParameter(JRXlsExporterParameter.IS_WHITE_PAGE_BACKGROUND, Boolean.FALSE);
                exporterXLS.setParameter(JRXlsExporterParameter.IS_REMOVE_EMPTY_SPACE_BETWEEN_ROWS, Boolean.TRUE);
                exporterXLS.exportReport();
                byte[] out = excelOutput.toByteArray();
                return out;
            } catch (JRException ex) {
                Logger.getLogger(iReport.class.getName()).log(Level.WARNING, ex.getMessage(), ex);
            } finally {

            }
        }
        return null;
    }*/
    // private List getData() throws IOException {
    //   if (this.reportData.getClass() == String.class) {
    //   return this.getDataFromJson();
    //   } else {
    //    return this.getDataFromArray();
    // }
    // }

    /*private List getDataFromArray() {
        List listdata = new ArrayList();
        List<?> data = (List<?>) this.reportData;
        data.stream().map((reportData1) -> {
            Class cls = reportData1.getClass();
            Map<String, Object> pmap = new HashMap<>();
            while (cls != null) {
                Field[] fileds = cls.getDeclaredFields();
                int n = fileds.length;

                for (int j = 0; j < n; j++) {
                    try {
                        if (!fileds[j].getName().equals("serialVersionUID")
                                && !fileds[j].getName().startsWith("jdo")) {
                            fileds[j].setAccessible(true);
                            pmap.put(fileds[j].getName(), fileds[j].get(reportData1));
                            fileds[j].setAccessible(false);
                        }
                    } catch (SecurityException | IllegalArgumentException | IllegalAccessException ex) {
                        Logger.getLogger(iReport.class.getName()).log(Level.WARNING, ex.getMessage(), ex);
                    }
                }
                cls = cls.getSuperclass();
            }
            return pmap;
        }).forEachOrdered((pmap) -> {
            listdata.add(pmap);
        });
        return listdata;
    }*/
    //private List getDataFromJson() throws IOException {
    //  ObjectMapper objectMapper = new ObjectMapper();
    // ObjectMapper objectMapper = new ObjectMapper();
    // List<HashMap<String, Object>> listdata = objectMapper.readValue(this.reportData.toString(), new TypeReference<List<HashMap<String, Object>>>() {
    // });
    //objectMapper.
    //  return listdata;

    /*  List listdata = new ArrayList();
        if (null != this.reportData) {
            HashMap<String,Object> d = objectMapper.readValue(this.reportData.toString(),new TypeReference<HashMap<String,Object>>() {});
            
            JSONArray d = null;
            try {
                d = new JSONArray(this.reportData.toString());
                listdata = this.getObjectJSONArray(d);
            } catch (JSONException ex) {
                Logger.getLogger(iReport.class.getName()).log(Level.SEVERE, null, ex);
            }

        }
        return listdata;*/
    // }

    /* private List getObjectJSONArray(JSONArray d) {
        List listdata = new ArrayList();
        for (int i = 0; i < d.length(); i++) {
            try {
                Object dd = d.get(i);
                if (dd.getClass() == JSONObject.class) {
                    Map<String, Object> obj = this.getObjectJSON((JSONObject) dd);
                    listdata.add(obj);
                } else {
                    // Object obj=d.get(i);
                    Map<String, Object> obj = new HashMap<>();
                    obj.put("index", dd);
                    listdata.add(obj);
                }
            } catch (JSONException ex) {
                Logger.getLogger(iReport.class.getName()).log(Level.SEVERE, null, ex);
            }
        }

        return listdata;
    }*/

 /* private Map<String, Object> getObjectJSON(JSONObject dd) {
        Iterator e = dd.keys();
        Map<String, Object> obj = new HashMap<>();
        while (e.hasNext()) {
            String name = (String) e.next();
            try {
                //   System.out.println(name);
                Object v = dd.get(name);
                if (v.getClass() == JSONObject.class) {
                    obj.put(name, this.getObjectJSON((JSONObject) v));
                } else if (v.getClass() == JSONArray.class) {
                    obj.put(name, this.getObjectJSONArray((JSONArray) v));
                } else {
                    obj.put(name, v);
                }

            } catch (JSONException ex) {
                Logger.getLogger(iReport.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        return obj;
    }*/
 /* private JsonDataSource getDataCollection() throws  JRException, UnsupportedEncodingException {
        //JRMapCollectionDataSource datas = new JRMapCollectionDataSource(this.getData());
        //  net.sf.jasperreports.engine.data.JRBeanArrayDataSource
        InputStream is = new ByteArrayInputStream(this.reportData.toString().getBytes("UTF-8"));
        JsonDataSource jsonds =new JsonDataSource(is);
    //    JsonDataCollection js=new JsonDataCollection<>()
        //jsonds.
     //new JsonNode();
    // ObjectMapper objectMapper = new ObjectMapper();
   //  JsonNode x;
   //  x.binaryValue()
        return jsonds;
    }*/
}
