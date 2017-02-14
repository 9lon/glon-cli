/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package nylon.report;


import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;


/**
 *
 * @author somchit
 */
public class iReportc {

    public int add(int x, int y) {
        return x + y;
    }

    public byte[] test(Object objx)  {
        //Object obj=objx.clone();
        System.out.println("============");
        // System.out.println(objx);
      /*  JSONArray data = new JSONArray(objx.toString());
        for (int i = 0; i < data.length(); i++) {
            JSONObject o = data.getJSONObject(i);
            Iterator e = o.keys();
            while (e.hasNext()) {
                String name = (String) e.next();
                System.out.print(name);
                System.out.println(":" + o.getString(name));

            }
        }*/

        return new byte[]{0x12, 0x23};
    }

    public static void main(String[] args) throws FileNotFoundException, IOException {
        String data = "[{\"name\":\"somchit\",\"surname\":\"chanudom\",\"address\":\"5/424\"}"
                + ",{\"name\":\"somchit\",\"surname\":\"chanudom\",\"address\":\"5/424\",\"xxx\":[{\"name\":\"xx\"},{\"name\":\"bb\"}]}]";
        String parameter = "{\"department\":\"it\"}";
        iReport ir = new iReport();
         // String bb = ir.export("C:\\Users\\somchit\\Documents\\Projects\\nylon\\app\\reports\\report1.jasper", "pdf", data, parameter);
       //   System.out.println(bb);
        
       // ObjectMapper objectMapper = new ObjectMapper();
      //  List<HashMap<String,Object>> ds = objectMapper.readValue(data,new TypeReference<List<HashMap<String,Object>>>() {});
        //JsonNode jd= objectMapper.readTree(data);
        //jd.
        
     //   for(int i=0;i<ds.size();i++){
      //    Iterator it = ds.get(i).entrySet().iterator();
       //   while (it.hasNext()) {
         //     Map.Entry pair = (Map.Entry)it.next();
        //      System.out.println(pair.getKey() + " = " + pair.getValue());
          //    System.out.println(pair.getValue().getClass());
          //    
              //it.remove(); // avoids a ConcurrentModificationException
         // }
        
       // }
   //    Iterator it = d.entrySet().iterator();
  //  while (it.hasNext()) {
     //   Map.Entry pair = (Map.Entry)it.next();
     //   System.out.println(pair.getKey() + " = " + pair.getValue());
        //it.remove(); // avoids a ConcurrentModificationException
   // }

        //  FileOutputStream out = new FileOutputStream("test.pdf");
        // out.write(bb);
        //  out.close();
    }
}
