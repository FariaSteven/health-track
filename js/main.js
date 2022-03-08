$(document).ready(function () {
  const labels = [
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];

  // let arrData = 

  const stepsData = {
    labels: labels,
    datasets: [{
      label: 'Passos',
      backgroundColor: '#ff6384',
      borderColor: '#ff6384',
      data: [100, 150, 155, 150, 130, 130, 145].sort(() => 0.5 - Math.random()),
    }]
  };

  const waterData = {
    labels: labels,
    datasets: [{
      label: 'Água',
      backgroundColor: '#73B3F8',
      borderColor: '#73B3F8',
      data: [100, 150, 155, 150, 130, 130, 145].sort(() => 0.5 - Math.random()),
    }]
  };

  const exerciseData = {
    labels: labels,
    datasets: [{
      label: 'Exercícios',
      backgroundColor: '#9B73F8',
      borderColor: '#9B73F8',
      data: [100, 150, 155, 150, 130, 130, 145].sort(() => 0.5 - Math.random()),
    }]
  };

  const stepsConfig = {
    type: 'line',
    data: stepsData,
    options: {}
  };

  const waterConfig = {
    type: 'line',
    data: waterData,
    options: {}
  };

  const exerciseConfig = {
    type: 'line',
    data: exerciseData,
    options: {}
  };

  const stepChart = new Chart(
    document.getElementById('steps'),
    stepsConfig
  );
  
  const waterChart = new Chart(
    document.getElementById('water'),
    waterConfig
  );

  const exercisesChart = new Chart(
    document.getElementById('exercises'),
    exerciseConfig
  );
})