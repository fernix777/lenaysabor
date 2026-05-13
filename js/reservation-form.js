document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservationForm');
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Crear elemento para mostrar mensajes si no existe
    let formMessage = document.getElementById('form-message');
    if (!formMessage) {
        formMessage = document.createElement('div');
        formMessage.id = 'form-message';
        form.insertBefore(formMessage, form.firstChild);
    }

    // Mostrar/ocultar estados del botón
    const setLoading = (isLoading) => {
        if (isLoading) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        } else {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Reservar Ahora';
        }
    };

    // Mostrar mensaje de respuesta
    const showMessage = (message, isError = false) => {
        formMessage.textContent = message;
        formMessage.className = 'form-message ' + (isError ? 'error' : 'success');
        
        // Asegurarse de que el mensaje sea visible
        formMessage.style.display = 'block';
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    };

    // Validar campos requeridos
    const validateForm = () => {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');
            } else {
                field.classList.remove('error');
            }
        });
        
        return isValid;
    };

    // Manejar el envío del formulario
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Validar campos requeridos
        if (!validateForm()) {
            showMessage('Por favor completa todos los campos requeridos', true);
            return;
        }
        
        // Mostrar estado de carga
        setLoading(true);
        
        try {
            // Usar FormSubmit para enviar el formulario
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Si el envío es exitoso, redirigir a la página de gracias
                window.location.href = 'gracias.html?' + new URLSearchParams({
                    name: form.name.value,
                    fecha: form.fecha.value,
                    hora: form.hora.value,
                    people: form.people.value
                }).toString();
            } else {
                // Si hay un error en el envío
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error al enviar el formulario');
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            showMessage('Error al enviar la reserva. Por favor, inténtalo de nuevo más tarde.', true);
            setLoading(false);
        }
    });
    
    // Validación en tiempo real para campos requeridos
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        // Validar al cambiar el valor
        input.addEventListener('input', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.classList.add('error');
            } else {
                this.classList.remove('error');
            }
        });
        
        // Validar al perder el foco
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.classList.add('error');
            }
        });
    });
});
