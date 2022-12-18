package com.project.MyCalc;
import com.project.MyCalc.model.calculator;
import com.project.MyCalc.service.service;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/calculate")
public class controller {
    private final service serv;
    public controller(service serv) {
        this.serv = serv;
    }
    @GetMapping ("/{operand1}/{operand2}/{oper}/{curr_operand}/{isTheFirstOperand}/{isValidOperation}" )
   public String operation(@PathVariable ("operand1") String operand1,@PathVariable ("operand2") String  operand2 , @PathVariable ("oper") String oper, @PathVariable ("curr_operand") String curr_operand,
                    @PathVariable ("isTheFirstOperand") boolean isTheFirstOperand, @PathVariable ("isValidOperation") boolean isValidOperation){
        calculator calc=new calculator( operand1, operand2, oper, curr_operand,isTheFirstOperand, isValidOperation);
        return serv.operation(calc);
    }

}
