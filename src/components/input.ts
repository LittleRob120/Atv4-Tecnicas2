export const Input = (props) => {
    const { type = "text", placeholder = "", value, onChange } = props;

    return `
        <input 
            type="${type}" 
            placeholder="${placeholder}" 
            value="${value}" 
            oninput="this.value = onChange(this.value)" 
        />
    `;
};