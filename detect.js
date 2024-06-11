document.getElementById('diseaseForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const symptom = document.getElementById('symptom').value.toLowerCase();
    const diseases = {
        'headache': 'Migraine',
        'cough': 'Common Cold',
        'sore throat': 'Strep Throat',
        'nausea': 'Food Poisoning'
    };
    const result = diseases[symptom] ? `According to your symptoms, you most likely have ${diseases[symptom]}.` : 'No matching disease found.';
    document.getElementById('result').innerText = result;
});
