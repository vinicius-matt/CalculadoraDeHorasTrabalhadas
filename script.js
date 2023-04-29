let registros = [];

function adicionarRegistro() {
  const valorHora = parseFloat(document.getElementById('valor-hora').value);
  const mes = parseInt(document.getElementById('mes').value);
  const ano = parseInt(document.getElementById('ano').value);
  const dia = parseInt(document.getElementById('dia').value);
  const diaSemana = parseInt(document.getElementById('diaSemana').value);
  const horasTrabalhadas = parseFloat(document.getElementById('horasTrabalhadas').value);

  registros.push({
    valorHora,
    mes,
    ano,
    dia,
    diaSemana,
    horasTrabalhadas,
  });

  const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
  const newRow = tabela.insertRow();
  const newDia = newRow.insertCell(0);
  const newDiaSemana = newRow.insertCell(1);
  const newHorasTrabalhadas = newRow.insertCell(2);
  newDia.innerHTML = dia;
  newDiaSemana.innerHTML = document.getElementById('diaSemana').options[diaSemana].text;
  newHorasTrabalhadas.innerHTML = horasTrabalhadas;
}

function calcular() {
  const valorTotal = registros.reduce((acc, registro) => acc + registro.valorHora * registro.horasTrabalhadas, 0);
  const horasTotal = registros.reduce((acc, registro) => acc + registro.horasTrabalhadas, 0);
  const mediaHora = valorTotal / horasTotal;
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `Valor total: R$${valorTotal.toFixed(2)}<br>
                          Horas trabalhadas: ${horasTotal.toFixed(2)}<br>
                          Média por hora: R$${mediaHora.toFixed(2)}`;
}

function limpar() {
  registros = [];
  const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
  tabela.innerHTML = '';
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
}
