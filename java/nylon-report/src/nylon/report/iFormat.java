/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package nylon.report;

import java.text.DateFormat;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;
import java.util.StringTokenizer;

/**
 *
 * @author somchit
 */
public class iFormat {

    private final String[] DIGIT_TH = {"๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"};
    // private String valueText; 
    // ···········Methods·············· 

    public String toThaiNumber(Object amountx) {
        String amount = String.valueOf(amountx);

        if (amount == null || amount.isEmpty()) {
            return "";
        }

        StringBuilder sb = new StringBuilder();
        for (char c : amount.toCharArray()) {
            if (Character.isDigit(c)) {
                String index = DIGIT_TH[Character.getNumericValue(c)].toString();
                sb.append(index);
            } else {
                sb.append(c);
            }
        }
        return sb.toString();
    }

    public String toFormat(Object obj, String format) {
        DecimalFormat df = new DecimalFormat(format);
        String x = df.format(obj);
        return x;
    }

    public String toDate(String srtDate, String... local) {
        if (local.length == 0) {
            return toDateEng(srtDate);
        }
        if ("th".equals(local[0].toLowerCase())) {
            return toDateThai(srtDate);
        } else {
            return toDateEng(srtDate);
        }
    }
    
    public String toDateShort(String srtDate, String... local) {
        if (local.length == 0) {
            return toDateEngShort(srtDate);
        }
        if ("th".equals(local[0].toLowerCase())) {
            return toDateThaiShort(srtDate);
        } else {
            return toDateEngShort(srtDate);
        }
    }

    public String toDateThai(String strDate) {
        String Months[] = {
            "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน",
            "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม",
            "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"};

        DateFormat df = new SimpleDateFormat("yyyy-MM-dd");

        int year = 0, month = 0, day = 0;
        try {
            Date date = df.parse(strDate);
            Calendar c = Calendar.getInstance();
            c.setTime(date);

            year = c.get(Calendar.YEAR);
            month = c.get(Calendar.MONTH);
            day = c.get(Calendar.DATE);

        } catch (ParseException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return String.format("%s %s %s", day, Months[month], year + 543);
    }

    public String toDateThai2(String strDate) {
        String Months[] = {
            "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน",
            "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม",
            "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"};

        DateFormat df = new SimpleDateFormat("yyyy-MM-dd");

        int year = 0, month = 0, day = 0;
        try {
            Date date = df.parse(strDate);
            Calendar c = Calendar.getInstance();
            c.setTime(date);

            year = c.get(Calendar.YEAR);
            month = c.get(Calendar.MONTH);
            day = c.get(Calendar.DATE);

        } catch (ParseException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return String.format("%s %s พ.ศ. %s", day, Months[month], year + 543);
    }

    public String toDateThaiShort(String strDate) {
        String Months[] = {
            "ม.ค", "ก.พ", "มี.ค", "เม.ย",
            "พ.ค", "มิ.ย", "ก.ค", "ส.ค",
            "ก.ย", "ต.ค", "พ.ย", "ธ.ค"};

        DateFormat df = new SimpleDateFormat("yyyy-MM-dd");

        int year = 0, month = 0, day = 0;
        try {
            Date date = df.parse(strDate);
            Calendar c = Calendar.getInstance();
            c.setTime(date);

            year = c.get(Calendar.YEAR);
            month = c.get(Calendar.MONTH);
            day = c.get(Calendar.DATE);

        } catch (ParseException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return String.format("%s %s %s", day, Months[month], year + 543);
    }

    public String toDateEng(String strDate) {
        try {
            DateFormat df = new SimpleDateFormat("yyyy-MM-dd");

            DateFormat df2 = new SimpleDateFormat("dd MMMM yyyy", Locale.US);

            Date date = df.parse(strDate);
            return df2.format(date);

        } catch (ParseException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return "";
    }

    public String toDateEngShort(String strDate) {
        try {
            DateFormat df = new SimpleDateFormat("yyyy-MM-dd");

            DateFormat df2 = new SimpleDateFormat("dd MMM yyyy", Locale.US);

            Date date = df.parse(strDate);
            return df2.format(date);

        } catch (ParseException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return "";
    }

    public String toThaiString(Object amountx) {
        String txt = amountx.toString();//String.valueOf(amountx);
        String bahtTxt, n, bahtTH = "";
        Double amount;
        try {
            amount = Double.parseDouble(txt);
        } catch (Exception ex) {
            amount = 0.00;
        }

        try {
            DecimalFormat df = new DecimalFormat("####.00");
            bahtTxt = df.format(amount);
            String[] num = {"ศูนย์", "หนึ่ง", "สอง", "สาม", "สี่", "ห้า",
                "หก", "เจ็ด", "แปด", "เก้า", "สิบ"};
            String[] rank = {"", "สิบ", "ร้อย", "พัน", "หมื่น", "แสน", "ล้าน", "สิบล้าน", "ร้อยล้าน", "พันล้าน", "หมื่นล้าน", "แสนล้าน"};
            String[] temp = bahtTxt.split("[.]");
            String intVal = temp[0];
            String decVal = temp[1];
            if (Double.parseDouble(bahtTxt) == 0) {
                bahtTH = "ศูนย์บาทถ้วน";
            } else {
                for (int i = 0; i < intVal.length(); i++) {
                    n = intVal.substring(i, i + 1);
                    if (n != "0") {
                        if ((i == (intVal.length() - 1)) && (n == "1")) {
                            bahtTH += "เอ็ด";
                        } else if ((i == (intVal.length() - 2)) && (n == "2")) {
                            bahtTH += "ยี่";
                        } else if ((i == (intVal.length() - 2)) && (n == "1")) {
                            bahtTH += "";
                        } else {
                            bahtTH += num[Integer.parseInt(n)];
                        }
                        bahtTH += rank[(intVal.length() - i) - 1];
                    }
                }
                bahtTH += "บาท";
                if (decVal == "00") {
                    bahtTH += "ถ้วน";
                } else {
                    for (int i = 0; i < decVal.length(); i++) {
                        n = decVal.substring(i, i + 1);
                        if (n != "0") {
                            if ((i == decVal.length() - 1) && (n == "1")) {
                                bahtTH += "เอ็ด";
                            } else if ((i == (decVal.length() - 2)) && (n == "2")) {
                                bahtTH += "ยี่";
                            } else if ((i == (decVal.length() - 2)) && (n == "1")) {
                                bahtTH += "";
                            } else {
                                bahtTH += num[Integer.parseInt(n)];
                            }
                            bahtTH += rank[(decVal.length() - i) - 1];
                        }
                    }
                    bahtTH += "สตางค์";
                }
            }

        } catch (Exception exe) {

            System.out.print(exe.getMessage());
        }
        return bahtTH;

    }

    private final String[] tensNames = {
        "",
        " ten",
        " twenty",
        " thirty",
        " forty",
        " fifty",
        " sixty",
        " seventy",
        " eighty",
        " ninety"
    };

    private final String[] numNames = {
        "",
        " one",
        " two",
        " three",
        " four",
        " five",
        " six",
        " seven",
        " eight",
        " nine",
        " ten",
        " eleven",
        " twelve",
        " thirteen",
        " fourteen",
        " fifteen",
        " sixteen",
        " seventeen",
        " eighteen",
        " nineteen"
    };

    // private EnglishNumberToWords() {
    // }
    private String convertLessThanOneThousand(int number) {
        String soFar;

        if (number % 100 < 20) {
            soFar = numNames[number % 100];
            number /= 100;
        } else {
            soFar = numNames[number % 10];
            number /= 10;

            soFar = tensNames[number % 10] + soFar;
            number /= 10;
        }
        if (number == 0) {
            return soFar;
        }
        return numNames[number] + " hundred" + soFar;
    }

//     public static String toEngString(Double numberx) {
//        // long d=numberx.longValue();
//        // long i= numberx/ Double.valueOf(d.);
//         long x=Long.valueOf(i+"");
//         
//         String sd=convertEngString(d);
//         String sx=convertEngString(x);
//         
//         return sd + " and " +  sx;
//     }
//     
    public String toEngString(long number) {

        // 0 to 999 999 999 999
        if (number == 0) {
            return "zero";
        }

        String snumber = Long.toString(number);

        // pad with "0"
        String mask = "000000000000";
        DecimalFormat df = new DecimalFormat(mask);
        snumber = df.format(number);

        // XXXnnnnnnnnn
        int billions = Integer.parseInt(snumber.substring(0, 3));
        // nnnXXXnnnnnn
        int millions = Integer.parseInt(snumber.substring(3, 6));
        // nnnnnnXXXnnn
        int hundredThousands = Integer.parseInt(snumber.substring(6, 9));
        // nnnnnnnnnXXX
        int thousands = Integer.parseInt(snumber.substring(9, 12));

        String tradBillions;
        switch (billions) {
            case 0:
                tradBillions = "";
                break;
            case 1:
                tradBillions = convertLessThanOneThousand(billions)
                        + " billion ";
                break;
            default:
                tradBillions = convertLessThanOneThousand(billions)
                        + " billion ";
        }
        String result = tradBillions;

        String tradMillions;
        switch (millions) {
            case 0:
                tradMillions = "";
                break;
            case 1:
                tradMillions = convertLessThanOneThousand(millions)
                        + " million ";
                break;
            default:
                tradMillions = convertLessThanOneThousand(millions)
                        + " million ";
        }
        result = result + tradMillions;

        String tradHundredThousands;
        switch (hundredThousands) {
            case 0:
                tradHundredThousands = "";
                break;
            case 1:
                tradHundredThousands = "one thousand ";
                break;
            default:
                tradHundredThousands = convertLessThanOneThousand(hundredThousands)
                        + " thousand ";
        }
        result = result + tradHundredThousands;

        String tradThousand;
        tradThousand = convertLessThanOneThousand(thousands);
        result = result + tradThousand;

        // remove extra spaces!
        return result.replaceAll("^\\s+", "").replaceAll("\\b\\s{2,}\\b", " ").toUpperCase();
    }

    /**
     * @param args
     */
    public static void main(String[] args) {
        System.out.println("new iFormat().toThaiNumber(-1257000.5463) : " + new iFormat().toThaiNumber(-1257000.5463));
        System.out.println("new iFormat().toFormat(1234.5463, \"#,##0.00\") : " + new iFormat().toFormat(1234.5463, "#,##0.00"));
        System.out.println("new iFormat().toDate(\"2016-12-31\",\"th\") : " + new iFormat().toDate("2016-12-31","th"));
        System.out.println("new iFormat().toDateThai2(\"2016-12-31\") : " + new iFormat().toDateThai2("2016-12-31"));
        System.out.println("new iFormat().toDateThaiShort(\"2016-12-31\") : " + new iFormat().toDateThaiShort("2016-12-31"));
        System.out.println("new iFormat().toThaiNumber(new iFormat().toDateThai2(\"2016-12-31\")) : " + new iFormat().toThaiNumber(new iFormat().toDateThai2("2016-12-31")));
        System.out.println("new iFormat().toDateEng(\"2016-12-31\") : " + new iFormat().toDateEng("2016-12-31"));
        System.out.println("new iFormat().toDateEngShort(\"2016-12-31\") : " + new iFormat().toDateEngShort("2016-12-31"));
        System.out.println("new iFormat().toThaiString(123489121231.23) : " + new iFormat().toThaiString(123489121231.23));
        System.out.println("new iFormat().toEngString(1234891) : " + new iFormat().toEngString(1234891));
    }

}
