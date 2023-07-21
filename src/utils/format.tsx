export const formatDate = (date: string) => {
    return date ? new Date(date)
        .toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }) : '';
}

export const formatAmount = (amount: number) => {
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });
    return formatter.format(amount);
}