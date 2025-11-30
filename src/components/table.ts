export const Table = <T extends { id: number }>(props: { data: T[]; columns: { header: string; accessor: keyof T }[] }) => {
    return `
        <table>
            <thead>
                <tr>
                    ${props.columns.map(column => `<th>${column.header}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                ${props.data.map(item => `
                    <tr>
                        ${props.columns.map(column => `<td>${item[column.accessor]}</td>`).join('')}
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
};