function calcularPromedio() {
    var c1 = parseInt(document.getElementById("c1").value);
    var c2 = parseInt(document.getElementById("c2").value);
    var c3 = parseInt(document.getElementById("c3").value);
    var c4 = parseInt(document.getElementById("c4").value);
    var c5 = parseInt(document.getElementById("c5").value);
    var resultad = "";

    var promedio = (c1 + c2 + c3 + c4 + c5) / 5;
    resultad = promedio;

    document.getElementById("resultado").innerHTML = resultad;
    document.getElementById("tabla-calificaciones").style.display = "table";
    datos();
}

function datos() {
    var matricula = document.getElementById("matricula").value;
    var nombre = document.getElementById("nombre").value;

    var materia1 = document.getElementById("m1").value;
    var materia2 = document.getElementById("m2").value;
    var materia3 = document.getElementById("m3").value;
    var materia4 = document.getElementById("m4").value;
    var materia5 = document.getElementById("m5").value;

    var ca1 = document.getElementById("c1").value;
    var ca2 = document.getElementById("c2").value;
    var ca3 = document.getElementById("c3").value;
    var ca4 = document.getElementById("c4").value;
    var ca5 = document.getElementById("c5").value;

    // Crear una nueva fila para cada conjunto de datos
    var newRow1 = document.createElement("tr");
    newRow1.innerHTML = `
        <td>${matricula}</td>
        <td>${nombre}</td>
        <td>${materia1}</td>
        <td>${ca1}</td>
    `;
    document.getElementById("tabla-body").appendChild(newRow1);

    var newRow2 = document.createElement("tr");
    newRow2.innerHTML = `
        <td>${matricula}</td>
        <td>${nombre}</td>
        <td>${materia2}</td>
        <td>${ca2}</td>
    `;
    document.getElementById("tabla-body").appendChild(newRow2);

    var newRow3 = document.createElement("tr");
    newRow3.innerHTML = `
        <td>${matricula}</td>
        <td>${nombre}</td>
        <td>${materia3}</td>
        <td>${ca3}</td>
    `;
    document.getElementById("tabla-body").appendChild(newRow3);

    var newRow4 = document.createElement("tr");
    newRow4.innerHTML = `
        <td>${matricula}</td>
        <td>${nombre}</td>
        <td>${materia4}</td>
        <td>${ca4}</td>
    `;
    document.getElementById("tabla-body").appendChild(newRow4);

    var newRow5 = document.createElement("tr");
    newRow5.innerHTML = `
        <td>${matricula}</td>
        <td>${nombre}</td>
        <td>${materia5}</td>
        <td>${ca5}</td>
    `;
    document.getElementById("tabla-body").appendChild(newRow5);
}
