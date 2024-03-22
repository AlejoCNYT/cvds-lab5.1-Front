import React, { Component } from "react";

class MiComponente extends Component {
    render() {
        let receta = {
            nombre: 'Sandwich',
            ingredientes: ['Tomato', 'Provolone cheese', 'Turkey', 'Olives', 'Sweet sauce'],
            calorias: 250
        };

        return (
            <div className="mi-componente">
                <h1>{'Recipe: ' + receta.nombre}</h1>
                <h2>{'Calories: ' + receta.calorias}</h2>
                <hr />
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            console.log(ingrediente);
                            return (
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            );
                        })
                    }
                </ol>
                <hr />
            </div>
        );
    }
}

export default MiComponente;
