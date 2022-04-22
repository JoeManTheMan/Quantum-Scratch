## Classes – 

### block - 
#### Constructor:
`constructor(block_name, block_id)`

#### Properties:
block_name: the name of the block, this can represent different things to different subtypes of the block class  
block_id: a unique id for the block. It is used to link a block to the respective qasm generated from it  

#### block subclasses:
- built_in_gate_block  
- var_definition_block  
- var_ref_block  
- var_assignment_block  
- measurement_block  
- expression_block  
- if_block  

### built_in_gate_block  
#### Constructor  
`constructor(block_name, block_id, parameters, qubit_operands)`  

#### Properties:
block_name: A string containing the symbol of the gate, e.g “h”  
block_id: a unique id for the block. It is used to link a block to the respective qasm generated from it  
parameters: an array containing the parameters (angles) of the gate. If there are no parameters, an empty array should be passed to the constructor. The number of elements should be the same as the   
qubit_operands: an array containing the qubits that the gate acts on. Must be integers. All qubit operands must be different numbers.  
block_type: a string containing the type of the block. It is automatically set to "built_in_gate" upon construction of the block object  

### var_def_block
#### Constructor
`constructor(block_name, block_id, var_type, value)`  

#### Properties:
block_name: a string containing the variable name, should be unique, any other variables with the same name will cause an error  
block_id: a unique id for the block. It is used to link a block to the respective qasm generated from it  
var_type: The type of the variable as a string. It can be either “angle”, “integer”, “angle_list” or “integer_list”  
value: the value of the variable. Should be an array of 1 or more elements.  
block_type:  a string containing the type of the block. It is automatically set to “variable_def” upon construction of the block object  

### var_ref_block
#### Constructor
`constructor(block_name, block_id)`  

#### Properties:
block_name: a string containing the variable name that this variable reference block refers to  
block_id: a unique id for the block. It is used to link a block to the respective qasm generated from it  
block_type: a string containing the type of the block. It is automatically set to "variable_ref" upon construction of the block object  

### var_assignment_block
#### Constructor
`constructor(block_name, block_id, lhs, rhs)`  

#### Properties:
block_name: a string containing the name of the block, it is currently unused in this block type  
block_id: a unique id for the block. It is used to link a block to the respective qasm generated from it  
lhs: the left hand side of the equation, the variable which has its value modified should be a variable reference block  
rhs: the right hand side of the equation, should be either a variable reference, a value, or an expression block  
block_type: a string containing the type of the block. It is automatically set to "var_assignment" upon construction of the block object  

### measurement_block
#### Constructor
`constructor(block_name, block_id, qubit_operands, measure_all=false)`

#### Properties:
block_name: a string containing the name of the block, it is currently unused in this block type  
block_id: a unique id for the block. It is used to link a block to the respective qasm generated from it  
qubit_operands: an array containing the qubits to be measured. Must be integers.  
measure_all: a boolean, default value is false. If set to true, then the whole quantum register will be measured, ignoring the qubit_operands values  
block_type: a string containing the type of the block. It is automatically set to "measurement" upon construction of the block object  


### expression_block
#### Constructor
`constructor(block_name, block_id, operator, operands)`  

#### Properties:
block_name: a string containing the name of the block, it is currently unused in this block type  
block_id: a unique id for the block. It is used to link a block to the respective qasm generated from it  
operator: a string containing an operator, currently supports "+" and "-"  
operands: the values that the expression block can work on. This can be either another expression block, a variable, or a number. There must be 2 values supplied.  
block_type: a string containing the type of the block. It is automatically set to "expression" upon construction of the block object  

### if_block
#### Constructor
`constructor(block_name, block_id, values, gate)`

#### Properties:
block_name: a string containing the name of the block, it is currently unused in this block type  
block_id: a unique id for the block. It is used to link a block to the respective qasm generated from it  
values: an array containing a single value. Multiple values are currently unsupported.  
gate: the gate to execute based on the value of the if condition.  
block_type: a string containing the type of the block. It is automatically set to "if" upon construction of the block object  


### loop_block
#### Constructor
`constructor(block_name, block_id, num_loops, blocks)`  

#### Properties:
block_name: a string containing the name of the block, it is currently unused in this block type  
block_id: a unique id for the block. It is used to link a block to the respective qasm generated from it  
num_loops: an integer, containing the number of times to repeat the blocks  
blocks: an array of blocks to be repeated. May not have variable definitions  
block_type: a string containing the type of the block. It is automatically set to "loop" upon construction of the block object  

### custom_function_def
#### Constructor
`constructor(block_name, block_id, num_params, num_operands, blocks)`  

#### Properties:
block_name: a string containing the name of the block, it must be unique. Any other function definitions with the same name will cause an error  
block_id: a unique id for the block. It is used to link a block to the respective qasm generated from it  
num_params: the number of parameters(angles) that the function will take. This value currently does nothing.  
num_operands: the number of operands(integers) that the function will take. This value currently does nothing.  
blocks: A list of blocks to be executed. Currently does not support expanding parameters and operands into the blocks.  
block_type: a string containing the type of the block. It is automatically set to "custom_function_def" upon construction of the block object  

### custom_function_ref
#### Constructor
`constructor(block_name, block_id, params, operands)`  

#### Properties:
block_name: a string containing the function name that this function ref refers to  
block_id: a unique id for the block. It is used to link a block to the respective qasm generated from it  
params: an array of parameters(angles) to pass to the inner block. This value currently does nothing  
operands: an array of operands(integers) to pass to the inner block. This value currently does nothing  
block_type: a string containing the type of the block. It is automatically set to "custom_function_ref" upon construction of the block object  

### n_bit_controlled_gate
#### Constructor
`constructor(block_name, block_id, controls, anticontrols, target, gate_name)`  

#### Properties:
block_name: a string containing the name of the block, it is currently unused in this block type  
block_id: a unique id for the block. It is used to link a block to the respective qasm generated from it  
controls: an array containing the bits that must be 1 for the gate to execute  
anticontrols: an array containing the bits that must be 0 for the gate to execute  
target: the qubit that the gate is executing on  
gate_name: the name of the gate being executed  
block_type: a string containing the type of the block. It is automatically set to "n_bit_controlled_gate" upon construction of the block object  


