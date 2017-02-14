/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package nylon.data;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author somchit
 */
public class JDBCConnect {
    public class ConnectString{
        private String name;
        private String driver;
        private String url;
        private String user;
        private String password;

        public ConnectString(String name, String driver, String url, String user, String password) {
            this.name = name;
            this.driver = driver;
            this.url = url;
            this.user = user;
            this.password = password;
        }
        
        public Connection getConnect() throws SQLException{
             Connection conn = DriverManager.getConnection(url, user, password);
             return conn;
        }
        

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getDriver() {
            return driver;
        }

        public void setDriver(String driver) {
            this.driver = driver;
        }

        public String getUrl() {
            return url;
        }

        public void setUrl(String url) {
            this.url = url;
        }

        public String getUser() {
            return user;
        }

        public void setUser(String user) {
            this.user = user;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
        
        
    }
    // private Connection connection;
    private  Map<String, ConnectString> connections;

    public JDBCConnect() {
        connections = new HashMap<>();
    }
    

    public String addConnection(String name, String driver, String url, String user, String password) {

        try {
          // System.out.println(name);
            // System.out.println(driver);
           // System.out.println(url);
            // System.out.println(user);
             // System.out.println(password);
          //  Class.forName(driver);
           //  System.out.println("xxxxx");
           
            ConnectString connStr=new ConnectString(name, driver, url, user, password);
            this.connections.put(name, connStr);
            return "add Connection ok";
        } catch (Exception ex) {
              //System.out.println("xxxxx");
            Logger.getLogger(JDBCConnect.class.getName()).log(Level.SEVERE, null, ex);
            return ex.getMessage();
        }

    }

    public String query(String connName, String sql, Object [] params) {
        if (this.connections.containsKey(connName)) {
            PreparedStatement stmt = null;
            List<Map<String, Object>> datas = new ArrayList<>();
            ObjectMapper mapper = new ObjectMapper();
           
            try {
                Connection connection = this.connections.get(connName).getConnect();
                stmt = connection.prepareStatement(sql);
                if (params.length > 0) {
                    for (int i = 0; i < params.length; i++) {
                        stmt.setString(i + 1, (String) params[i]);
                    }
                }
                ResultSet rs = stmt.executeQuery();
                ResultSetMetaData rsmd = rs.getMetaData();
                while (rs.next()) {
                    int numColumns = rsmd.getColumnCount();
                    Map<String, Object> obj = new HashMap<>();
                    for (int i = 0; i < numColumns; i++) {
                        String column_name = rsmd.getColumnLabel(i + 1);
                        int column_type = rsmd.getColumnType(i + 1);
                        switch (column_type) {
                            case java.sql.Types.ARRAY:
                                obj.put(column_name, rs.getArray(column_name));
                                break;
                            case java.sql.Types.BIGINT:
                                obj.put(column_name, rs.getInt(column_name));
                                break;
                            case java.sql.Types.BOOLEAN:
                                obj.put(column_name, rs.getBoolean(column_name));
                                break;
                            case java.sql.Types.BLOB:
                                obj.put(column_name, rs.getBlob(column_name));
                                break;
                            case java.sql.Types.DOUBLE:
                                obj.put(column_name, rs.getDouble(column_name));
                                break;
                            case java.sql.Types.FLOAT:
                                obj.put(column_name, rs.getFloat(column_name));
                                break;
                            case java.sql.Types.INTEGER:
                                obj.put(column_name, rs.getInt(column_name));
                                break;
                            case java.sql.Types.NVARCHAR:
                                obj.put(column_name, rs.getNString(column_name));
                                break;
                            case java.sql.Types.VARCHAR:
                                obj.put(column_name, rs.getString(column_name));
                                break;
                            case java.sql.Types.TINYINT:
                                obj.put(column_name, rs.getInt(column_name));
                                break;
                            case java.sql.Types.SMALLINT:
                                obj.put(column_name, rs.getInt(column_name));
                                break;
                            case java.sql.Types.DATE:
                                obj.put(column_name, rs.getDate(column_name));
                                break;
                            case java.sql.Types.TIMESTAMP:
                                obj.put(column_name, rs.getTimestamp(column_name));
                                break;
                            default:
                                obj.put(column_name, rs.getObject(column_name));
                                break;
                        }
                    }
                    datas.add(obj);

                }
            } catch (SQLException ex) {
                Logger.getLogger(JDBCConnect.class.getName()).log(Level.SEVERE, null, ex);
            } finally {
                if (stmt != null) {
                    try {
                        stmt.close();
                    } catch (SQLException ex) {
                        Logger.getLogger(JDBCConnect.class.getName()).log(Level.SEVERE, null, ex);
                    }
                }
            }
            String json;
            try {
                json = mapper.writeValueAsString(datas);
                return json;
            } catch (JsonProcessingException ex) {
                Logger.getLogger(JDBCConnect.class.getName()).log(Level.SEVERE, null, ex);
            }

        }
        return "";
    }

    public static void main(String... argrs) {
        //  try {
        //    JDBCConnect con = new JDBCConnect("com.mysql.jdbc.Driver", "jdbc:mysql://db.codeunbug.com:3306/rmut_expert_db", "test", "If1C5B13eeNWvyCr");

        //    String data = con.query("SELECT *  FROM  vet_hospital where province= ? ", "กรุงเทพมหานคร");
        //String f1="กรุงเทพมหานคร";
        //String [] pm=new String [] {f1};
        //      System.out.println(data);
        //   } catch (ClassNotFoundException ex) {
        //     Logger.getLogger(JDBCConnect.class.getName()).log(Level.SEVERE, null, ex);
        //  } catch (SQLException ex) {
        //    Logger.getLogger(JDBCConnect.class.getName()).log(Level.SEVERE, null, ex);
        //  } catch (JsonProcessingException ex) {
        //      Logger.getLogger(JDBCConnect.class.getName()).log(Level.SEVERE, null, ex);
        // }
    }
}
