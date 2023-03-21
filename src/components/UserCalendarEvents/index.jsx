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

    const initialSelectedMonthEventsStructure = [
        { message: 'Data com previsão de entradas', days: [] },
        { message: 'Data com previsão de saídas', days: [] },
        { message: 'Data com previsão de entradas e saídas', days: [] }
    ];
    const [selectedMonthEvents, setSelectedMonthEvents] = useState(
        initialSelectedMonthEventsStructure
    );

    // Getting only days of selected month
    const correctRangeOfDaysInMonth = rangeOfDaysInMonth
        .filter(day => day.isFromThisMonth)
        .reduce((onlyDaysArray, day) => {
            onlyDaysArray.push(day.value);
            return onlyDaysArray;
        }, []);

    useEffect(() => {
        // Resetting daysEventsStructure to handle with selected month
        setSelectedMonthEvents(initialSelectedMonthEventsStructure);
        let newSelectedMonthEventsStructure = initialSelectedMonthEventsStructure;

        // Getting event days of selected month sorted by the type of event (index)
        correctRangeOfDaysInMonth.map(day => {
            const dayEvents = getCalendarEventsAlert(
                new Date(selectedYear, selectedMonthIndex, day)
            );

            switch (dayEvents) {
                case 'mixedValues':
                    newSelectedMonthEventsStructure[2].days.push(day);
                    setSelectedMonthEvents(newSelectedMonthEventsStructure);
                    break;

                case 'negativeValue':
                case 'onlyNegativeValues':
                    newSelectedMonthEventsStructure[1].days.push(day);
                    setSelectedMonthEvents(newSelectedMonthEventsStructure);
                    break;

                case 'positiveValue':
                case 'onlyPositiveValues':
                    newSelectedMonthEventsStructure[0].days.push(day);
                    setSelectedMonthEvents(newSelectedMonthEventsStructure);
                    break;
            }
        });

        console.log(selectedMonthEvents);
    }, [selectedMonthIndex, selectedYear]);

    const selectedMonthEventsExist =
        selectedMonthEvents[2].days.length > 0 ||
        selectedMonthEvents[1].days.length > 0 ||
        selectedMonthEvents[0].days.length > 0;

    return (
        <ContainerStyled>
            <p>Legenda</p>
            <div>
                <div>
                    <span>{currentDay}</span>
                    <p>Hoje</p>
                </div>
                {selectedMonthEventsExist ? (
                    selectedMonthEvents.map(
                        (daysEventsStructure, selectedMonthEventsIndex) => (
                            <div key={selectedMonthEventsIndex}>
                                {daysEventsStructure.days.map(
                                    (day, daysEventsStructureIndex) => (
                                        <span key={daysEventsStructureIndex}>{day}</span>
                                    )
                                )}
                                <p>{daysEventsStructure.message}</p>
                            </div>
                        )
                    )
                ) : (
                    <h4>Esse mês não possui movimentações</h4>
                )}
            </div>
        </ContainerStyled>
    );
}
