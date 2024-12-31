// Script para alternar a visibilidade das explicações das regras
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const ruleDetails = button.nextElementSibling;
        if (ruleDetails.style.display === 'none' || ruleDetails.style.display === '') {
            ruleDetails.style.display = 'block';
            button.textContent = 'Ocultar Explicação';
        } else {
            ruleDetails.style.display = 'none';
            button.textContent = 'Ver Explicação';
        }
    });
});
