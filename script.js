// Escuchar el evento de envío en la página "index.html" para guardar la cita
if (document.getElementById('form-agenda')) {
    document.getElementById('form-agenda').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const cita = {
            nombre: document.getElementById('nombre').value,
            correo: document.getElementById('correo').value,
            telefono: document.getElementById('telefono').value,
            tipo_servicio: document.getElementById('tipo_servicio').value,
            tipo_mantenimiento: document.getElementById('tipo_mantenimiento').value,
            fecha: document.getElementById('fecha').value,
            hora: document.getElementById('hora').value
        };

        // Obtener citas guardadas, agregar la nueva y guardar en localStorage
        const citas = JSON.parse(localStorage.getItem('citas')) || [];
        citas.push(cita);
        localStorage.setItem('citas', JSON.stringify(citas));

        document.getElementById('mensaje').textContent = "Cita agendada exitosamente";
        document.getElementById('form-agenda').reset();
    });
}

// Mostrar citas en "ver-citas.html"
if (document.getElementById('lista-citas')) {
    document.addEventListener('DOMContentLoaded', function() {
        const citas = JSON.parse(localStorage.getItem('citas')) || [];
        
        if (citas.length === 0) {
            document.getElementById('lista-citas').innerHTML = "<tr><td colspan='7'>No hay citas agendadas</td></tr>";
        } else {
            citas.forEach(cita => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${cita.nombre}</td>
                    <td>${cita.correo}</td>
                    <td>${cita.telefono}</td>
                    <td>${cita.tipo_servicio}</td>
                    <td>${cita.tipo_mantenimiento} </td>
                    <td>${cita.fecha}</td>
                    <td>${cita.hora}</td>
                `;
                document.getElementById('lista-citas').appendChild(row);
            });
        }
    });
}
