
/* Function expects a quantum circuit, outputs an array containing the state of the circuit
 * after it has been run
 */ 
function get_circuit_properties(circuit)
{
    let hideZeroStates = false;
    if(circuit.numAmplitudes(false) > 8)
    {
        hideZeroStates=true;
    }


    let state = circuit.stateAsArray(hideZeroStates).map((qubit_state) => {
        return {vector_string: qubit_state.indexBinStr, 
            vector: qubit_state.index,
            amplitude: qubit_state.amplitude.toPolar(),

            // magnitude here refers to something different than in the circuit state
            magnitude: Math.sqrt(qubit_state.amplitude.re * qubit_state.amplitude.re
                                  + qubit_state.amplitude.im * qubit_state.amplitude.im), //square root of real^2 + imaginary^2 from amplitude,
            phase: qubit_state.phase,
            chance: qubit_state.chance
            }
    });
    return state;
}

export default get_circuit_properties;