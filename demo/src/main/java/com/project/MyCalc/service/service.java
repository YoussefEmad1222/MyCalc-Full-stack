package com.project.MyCalc.service;
import com.project.MyCalc.model.calculator;
import org.springframework.stereotype.Service;
@Service
public class service {
    public String operation(calculator calcul) {
        String curr_operand=calcul.getCurr_operand();
        String operand1=calcul.getOperand1();
        String operand2=calcul.getOperand2();
        String oper=calcul.getOperation();
        double x ;
        switch (oper) {
            case "add" -> {
                x = Double.parseDouble(operand1) + Double.parseDouble(operand2);
                if (x % 1 == 0) {
                    curr_operand = Long.toString((long) x);
                } else {
                    curr_operand = Double.toString(x);
                }
            }
            case "sub" -> {
                x = Double.parseDouble(operand1) - Double.parseDouble(operand2);
                if (x % 1 == 0) {
                    curr_operand = Long.toString((long) x);
                } else {
                    curr_operand = Double.toString(x);
                }
            }
            case "mult" -> {
                x = Double.parseDouble(operand1) * Double.parseDouble(operand2);
                if (x % 1 == 0) {
                    curr_operand = Long.toString((long) x);
                } else {
                    curr_operand = Double.toString(x);
                }
            }
            case "div" -> {
                x = Double.parseDouble(operand1) / Double.parseDouble(operand2);
                if (x % 1 == 0) {
                    curr_operand = Long.toString((long) x);
                } else {
                    curr_operand = Double.toString(x);
                }
            }
            case "inv" -> {
                x = 1 / Double.parseDouble(curr_operand);
                curr_operand = Double.toString(x);
            }
            case "sqr" -> {
                x = Double.parseDouble(curr_operand) * Double.parseDouble(curr_operand);
                curr_operand = Double.toString(x);
            }
            case "sqrt" -> {
                x = Math.sqrt(Double.parseDouble(curr_operand));
                curr_operand = Double.toString(x);
            }
            case "percent" -> {
                x = Double.parseDouble(curr_operand) / 100;
                curr_operand = Double.toString(x);
            }
            case "rev" -> {
                x = -Double.parseDouble(curr_operand);
                if (x % 1 == 0) {
                    curr_operand = Long.toString((long) x);
                } else {
                    curr_operand = Double.toString(x);
                }
            }
        }
        return curr_operand;
    }
}
