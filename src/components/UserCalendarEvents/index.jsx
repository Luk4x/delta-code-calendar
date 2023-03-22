import { useContext, useEffect, useState, Fragment } from 'react';
import { UserCalendarContext } from '../../context/UserCalendarContext';

import { getCalendarEventsAlert } from '../../utils/calendarHelpers';

import { ContainerStyled, TitleStyled, WrapListStyled, DayButtonStyled } from './styled';

export function UserCalendarEvents() {
    const {
        currentDay,
        selectedMonthIndex,
        selectedYear,
        rangeOfDaysInMonth,
        viewEventsInDate
    } = useContext(UserCalendarContext);

    const initialSelectedMonthEventsStructure = [
        {
            message: 'Data com previsão de entradas',
            type: 'positiveValue',
            days: []
        },
        {
            message: 'Data com previsão de saídas',
            type: 'negativeValue',
            days: []
        },
        {
            message: 'Data com previsão de entradas e saídas',
            type: 'mixedValues',
            days: []
        }
    ];
    const [selectedMonthEvents, setSelectedMonthEvents] = useState(
        initialSelectedMonthEventsStructure
    );
    const [selectedMonthEventsExist, setSelectedMonthEventsExist] = useState(false);

    // Getting only days of selected month
    const correctRangeOfDaysInMonth = rangeOfDaysInMonth
        .filter(day => day.isFromThisMonth)
        .reduce((onlyDaysArray, day) => {
            onlyDaysArray.push(day.value);
            return onlyDaysArray;
        }, []);

    useEffect(() => {
        // Getting event days of selected month sorted by the type of event (index)
        const newSelectedMonthEventsStructure = initialSelectedMonthEventsStructure;
        correctRangeOfDaysInMonth.map(day => {
            const dayEvents = getCalendarEventsAlert(
                new Date(selectedYear, selectedMonthIndex, day)
            );

            switch (dayEvents) {
                case 'mixedValues':
                    newSelectedMonthEventsStructure[2].days.push(day);
                    break;

                case 'negativeValue':
                case 'onlyNegativeValues':
                    newSelectedMonthEventsStructure[1].days.push(day);
                    break;

                case 'positiveValue':
                case 'onlyPositiveValues':
                    newSelectedMonthEventsStructure[0].days.push(day);
                    break;
            }
        });

        setSelectedMonthEvents(newSelectedMonthEventsStructure);
        setSelectedMonthEventsExist(
            newSelectedMonthEventsStructure[2].days.length > 0 ||
                newSelectedMonthEventsStructure[1].days.length > 0 ||
                newSelectedMonthEventsStructure[0].days.length > 0
        );
    }, [selectedYear, selectedMonthIndex, selectedMonthEventsExist]);

    return (
        <ContainerStyled>
            <TitleStyled>Legenda</TitleStyled>
            <WrapListStyled>
                <span>{currentDay}</span>
                <p>Hoje</p>
                {selectedMonthEventsExist ? (
                    selectedMonthEvents.map(
                        (daysEventsStructure, selectedMonthEventsIndex) =>
                            daysEventsStructure.days.length > 0 && (
                                <Fragment key={selectedMonthEventsIndex}>
                                    <DayButtonStyled
                                        dayEvents={daysEventsStructure.type}
                                        arrayLength={daysEventsStructure.days.length}
                                    >
                                        {daysEventsStructure.days.map(
                                            (
                                                day,
                                                daysEventsStructureIndex,
                                                daysEventsStructureArray
                                            ) => (
                                                <span key={daysEventsStructureIndex}>
                                                    {day}
                                                    {
                                                        // Setting ',' between
                                                        daysEventsStructureArray.length >
                                                            1 &&
                                                            daysEventsStructureIndex <
                                                                daysEventsStructureArray.length -
                                                                    1 &&
                                                            ','
                                                    }
                                                </span>
                                            )
                                        )}
                                    </DayButtonStyled>
                                    <p>{daysEventsStructure.message}</p>
                                </Fragment>
                            )
                    )
                ) : (
                    <h4>Esse mês não possui movimentações</h4>
                )}
            </WrapListStyled>
        </ContainerStyled>
    );
}
