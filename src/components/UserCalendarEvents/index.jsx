import { useContext, useEffect, useState } from 'react';
import { UserCalendarContext } from '../../context/UserCalendarContext';

import { getCalendarEventsAlert } from '../../utils/calendarHelpers';

import { ContainerStyled, SpanStyled } from './styled';

export function UserCalendarEvents() {
    const {
        currentDay,
        selectedMonthIndex,
        selectedYear,
        rangeOfDaysInMonth,
        viewEventsInDate
    } = useContext(UserCalendarContext);

    const initialDayEventsStructure = [[], [], []];
    const [dayEventsStructure, setDayEventsStructure] = useState(
        initialDayEventsStructure
    );

    const correctRangeOfDaysInMonth = rangeOfDaysInMonth.filter(day => {
        if (day.isFromThisMonth) return day.value;
    });

    useEffect(() => {
        let eventFound = false;

        correctRangeOfDaysInMonth.map(day => {
            const dayEvents = getCalendarEventsAlert(
                new Date(selectedYear, selectedMonthIndex, day.value)
            );

            if (dayEvents) eventFound = true;

            switch (dayEvents) {
                case 'mixedValues':
                    setDayEventsStructure([
                        ...dayEventsStructure,
                        dayEventsStructure[2].push(day.value)
                    ]);
                    break;

                case 'negativeValue':
                case 'onlyNegativeValues':
                    setDayEventsStructure([
                        ...dayEventsStructure,
                        dayEventsStructure[1].push(day.value)
                    ]);
                    break;

                case 'positiveValue':
                case 'onlyPositiveValues':
                    setDayEventsStructure([
                        ...dayEventsStructure,
                        dayEventsStructure[0].push(day.value)
                    ]);
                    break;

                case 'positiveValue':
                case 'onlyPositiveValues':
                    setDayEventsStructure([
                        ...dayEventsStructure,
                        dayEventsStructure[0].push(day.value)
                    ]);
                    break;
            }

            if (dayEvents === null && eventFound === false) {
                setDayEventsStructure(initialDayEventsStructure);
            }
        });
    }, [selectedMonthIndex, selectedYear]);

    console.log(dayEventsStructure);

    return (
        <ContainerStyled>
            <p>Legenda</p>
            <div>
                <div>
                    <span>{currentDay}</span>
                    <p>Hoje</p>
                </div>
                {/* {
                    // Getting the user day events in the selected month/year
                    correctRangeOfDaysInMonth.map((day, i) => {
                        const dayEvents = getCalendarEventsAlert(
                            new Date(selectedYear, selectedMonthIndex, day.value)
                        );

                        if (dayEvents)
                            return (
                                <div key={i}>
                                    <SpanStyled>{day.value}</SpanStyled>
                                    <p>
                                        {dayEvents === 'mixedValues'
                                            ? 'Data com previsão de entradas e saídas'
                                            : dayEvents === 'onlyPositiveValues' ||
                                              dayEvents === 'positiveValue'
                                            ? 'Data com previsão de entradas'
                                            : 'Data com previsão de saídas'}
                                    </p>
                                </div>
                            );
                    })
                } */}
            </div>
        </ContainerStyled>
    );
}
