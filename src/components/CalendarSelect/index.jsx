import { ContainerStyled, SelectContainer } from './styled';

import { ReactComponent as CalendarIcon } from '../../assets/icons/calendar-dates.svg';

export function CalendarSelect({ name, apparentName, values, selectedValue }) {
    return (
        <ContainerStyled>
            <label htmlFor={name}>{apparentName}</label>
            <SelectContainer>
                <CalendarIcon />
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
