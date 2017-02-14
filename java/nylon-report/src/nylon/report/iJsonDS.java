/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package nylon.report;

import java.io.ByteArrayInputStream;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.data.JsonDataSource;
import com.fasterxml.jackson.databind.node.ArrayNode;
import java.io.IOException;

/**
 *
 * @author somchit
 */
public class iJsonDS extends JsonDataSource {

    //@Override
    public iJsonDS(ArrayNode obj) throws JRException, IOException {

        super(new ByteArrayInputStream(obj.toString().getBytes("UTF-8")));
       
    }
}
