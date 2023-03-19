import { ContainerStyled, SelectContainer } from './styled';

import DarkCalendarIcon from '/assets/icons/calendar-dates-dark.svg';

export function CalendarSelect({ name, apparentName, values, selectedValue }) {
    return (
        <ContainerStyled>
            <label htmlFor={name}>{apparentName}</label>
            <SelectContainer>
                <img src={DarkCalendarIcon} alt="Ícone de calendário" />
                <select defaultValue={values[selectedValue]} name={name} id={name}>
                    {values.map(value => (
                        <option value={value} key={value}>
                            {
                                // Capitalizing text via Javascript due firefox select element css issue: https://bugzilla.mozilla.org/show_bug.cgi?id=1445885
                                typeof value === 'string'
                                    ? value.charAt(0).toUpperCase() + value.slice(1)
                                    : value
                            }
                        </option>
                    ))}
                </select>
            </SelectContainer>
        </ContainerStyled>
    );
}
