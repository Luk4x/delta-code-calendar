import { ContainerStyled, SelectContainer } from './styled';

import DarkCalendarIcon from '/assets/icons/calendar-dates-dark.svg';

export function CalendarSelect({
    name,
    apparentName,
    values,
    selectedValue,
    setValue,
    updateUserCalendarEvents
}) {
    const selectValue = e => {
        // Updating UserCalendarEvents component to show status of selected month/year instead of status of selected day
        updateUserCalendarEvents('initial');

        const value = e.target.value;

        // As I am showing the months by their proper names from an array, I work with them from the index of the value, which would be the name of the month, while with the years I work with the value itself. Below I do this check and return the correct value.
        if (isNaN(parseInt(value))) {
            const valueIndex = values.indexOf(e.target.value);
            setValue(valueIndex);
        } else {
            setValue(value);
        }
    };

    return (
        <ContainerStyled>
            <label htmlFor={name}>{apparentName}</label>
            <SelectContainer>
                <img src={DarkCalendarIcon} alt="Ícone de calendário" />
                <select
                    defaultValue={values[selectedValue]}
                    name={name}
                    id={name}
                    onChange={e => selectValue(e)}
                >
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
