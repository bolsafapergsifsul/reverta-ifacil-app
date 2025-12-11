function formatPhoneNumber(input: string | number | null | undefined): string {
  if (input === null || input === undefined) {
    return '';
  }

  // garante string
  const raw = String(input);

  // remove tudo que não é dígito
  let digits = raw.replace(/\D/g, '');

  // trata +55 ou 55 no começo
  if (digits.startsWith('55')) {
    digits = digits.slice(2);
  }

  // se veio com mais de 11 dígitos (ex: 0055... ou prefixos estranhos), tenta recuperar os últimos 11
  if (digits.length > 11) {
    // só faz isso quando houver sobra pequena (até 3 dígitos a mais) — evita cortar números válidos
    if (digits.length <= 13) {
      digits = digits.slice(-11);
    } else {
      // muito maior -> não formata, retorna raw limpo
      return raw.replace(/\s+/g, ' ').trim();
    }
  }

  // celular: 11 dígitos -> (DD) 9XXXX-XXXX
  if (digits.length === 11) {
    return digits.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }

  // fixo: 10 dígitos -> (DD) XXXX-XXXX
  if (digits.length === 10) {
    return digits.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }

  // se não tiver 10 ou 11 dígitos, retorna o original "limpo" (ou vazio se nada)
  return raw.trim();
}

export {formatPhoneNumber};
