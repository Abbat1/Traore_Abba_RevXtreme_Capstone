package com.example.Backend_For_Captsone.model;

// This class represents an order in the system
public class order {

    // Unique identifier for the user who placed the order
    private Integer Userinfo;

    // Email of the user who placed the order
    private Integer Email;

    // Shipping information for the order
    private Integer Shippinginfo;

    // Unique identifier for the car being ordered
    private Integer Carid;

    // Getters and setters for all fields
    // These methods allow other parts of the application to access and modify the fields



    public Integer getUserinfo() {
        return Userinfo;
    }

    public void setUserinfo(Integer userinfo) {
        Userinfo = userinfo;
    }

    public Integer getEmail() {
        return Email;
    }

    public void setEmail(Integer email) {
        Email = email;
    }

    public Integer getShippinginfo() {
        return Shippinginfo;
    }

    public void setShippinginfo(Integer shippinginfo) {
        Shippinginfo = shippinginfo;
    }

    public Integer getCarid() {
        return Carid;
    }

    public void setCarid(Integer carid) {
        Carid = carid;
    }
}