function calcular() {
    const valorHora = document.getElementById('valor-hora').value;
    const mes = document.getElementById('mes').value;
    const ano = document.getElementById('ano').value;
    
    const diasNoMes = new Date(ano, mes, 0).getDate();
    let totalHoras = 0;
    
    const tabela = document.getElementById('tabela');
    tabela.innerHTML = `
      <tr>
        <th>Dia</th>
        <th>Horas trabalhadas</th>
        <th>Valor a receber</th>
      </tr>
    `;
    
    for (let i = 1; i <= diasNoMes; i++) {
      const horas = Number(prompt(`Digite as horas trabalhadas no dia ${i}:`));
      const valorReceber = horas * valorHora;
      totalHoras += horas;
      
      tabela.innerHTML += `
        <tr>
          <td>${i}</td>
          <td>${horas.toFixed(2)}</td>
          <td>R$ ${valorReceber.toFixed(2)}</td>
        </tr>
      `;
    }
    
    const resultado = document.getElementById('resultado');
    const salario = totalHoras * valorHora;
    resultado.innerHTML = `Seu salário neste mês é de R$ ${salario.toFixed(2)}.`;
  }
  