package com.project.MyCalc.model;
public class calculator  {
    private String operand1;
    private String operand2;
    private String operation;
    private String curr_operand;
    private boolean isTheFirstOperand;
    private boolean isValidOperation;
    public void setValidOperation(boolean isValidOperation) {
        this.isValidOperation = isValidOperation;
    }
    public calculator() {
    }
    public void setOperand1(String operand1) {
        this.operand1 = operand1;
    }
    public void setOperand2(String operand2) {
        this.operand2 = operand2;
    }
    public void setOperation(String operation) {
        this.operation = operation;
    }
    public void setCurr_operand(String curr_operand) {
        this.curr_operand = curr_operand;
    }
    public boolean isTheFirstOperand() {
        return isTheFirstOperand;
    }
    public void setTheFirstOperand(boolean isTheFirstOperand) {
        this.isTheFirstOperand = isTheFirstOperand;
    }
    public String getOperand1() {
        return operand1;
    }
    public String getOperand2() {
        return operand2;
    }
    public String getOperation() {
        return operation;
    }
    public String getCurr_operand() {
        return curr_operand;
    }
    public calculator(String operand1, String operand2 , String operation, String curr_operand, boolean isTheFirstOperand,boolean isValidOperation) {
        this.operand1 = operand1;
        this.operand2 = operand2;
        this.operation = operation;
        this.curr_operand=curr_operand;
        this.isTheFirstOperand=isTheFirstOperand;
        this.isValidOperation=isValidOperation;
    }
}
