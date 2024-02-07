const textoPrincipal = document.querySelector('#texto-principal');
const diaAtual = new Date();
textoPrincipal.innerHTML = '';
textoPrincipal.innerHTML = formataDataMesAno(diaAtual);

function formataDataMesAno (data) {
  let textoPrincipal = ''
  const diaDaSemana = formataDiaSemanaTexto(data.getDay());
  const diaDaMes = data.getDate();
  const mes = formataMes(data.getMonth());
  const ano = data.getFullYear();
  const horario = formataHoraMinSeg(data);
  textoPrincipal += diaDaSemana + ', ' + diaDaMes + ' de ' + mes + ' de ' + ano;
  textoPrincipal += `<br>` + horario;
  return textoPrincipal
}

function formataDiaSemanaTexto (diaSemana) {
  let diaSemanaTexto = '';
  switch (diaSemana) {
    case 0:
      diaSemanaTexto = 'Domingo';
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = 'Segunda';
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = 'Terça';
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = 'Quarta';
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = 'Quinta';
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = 'Sexta';
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = 'Sábado';
      return diaSemanaTexto;
    default:
      diaSemanaTexto = '';
      return diaSemanaTexto;
  }
}

function formataMes (mes) {
  let mesEmTexto = '';
  switch (mes) {
    case 0:
      mesEmTexto = 'Janeiro';
      return mesEmTexto;
    case 1:
      mesEmTexto = 'Fevereiro';
      return mesEmTexto;
    case 2:
      mesEmTexto = 'Março';
      return mesEmTexto;
    case 3:
      mesEmTexto = 'Abril';
      return mesEmTexto;
    case 4:
      mesEmTexto = 'Maio';
      return mesEmTexto;
    case 5:
      mesEmTexto = 'Junho';
      return mesEmTexto;
    case 6:
      mesEmTexto = 'Junho';
      return mesEmTexto;
    case 7:
      mesEmTexto = 'Agosto';
      return mesEmTexto;
    case 8:
      mesEmTexto = 'Setembro';
      return mesEmTexto;
    case 9:
      mesEmTexto = 'Outubro';
      return mesEmTexto;
    case 10:
      mesEmTexto = 'Novembro';
      return mesEmTexto;
    case 11:
      mesEmTexto = 'Dezembro';
      return mesEmTexto;
    default:
      mesEmTexto = '';
      return mesEmTexto;
  }
}

function formataHoraMinSeg (data) {
  let horas = data.getHours();
  let minutos = data.getMinutes();

  horas = horas >= 10 ? horas : `0${horas}`;
  minutos = minutos >=10 ? minutos : `0${minutos}`;
  return horas + ':' + minutos;
}