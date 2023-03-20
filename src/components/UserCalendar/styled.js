import styled from 'styled-components';

import { Fragment } from 'react';

export const SectionStyled = styled.section`
    border-right: 2px solid ${props => props.theme.colorSchema.borderBase};
    min-height: 65vh;
    max-width: 452px;
`;

export const WrapTopButtonsStyled = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;

    button {
        padding: 5px 13px;
        border-radius: 3px;
        background: ${props => props.theme.colorSchema.backgroundBaseLevel2};
        color: ${props => props.theme.colorSchema.textBaseLevel3};
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: 0.2s ease-in-out;

        &:hover,
        :nth-child(3) {
            background: ${props => props.theme.colorSchema.backgroundHighlightLevel4};
            color: ${props => props.theme.colorSchema.backgroundHighlight};
        }
    }
`;

export const WrapSelectStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
    margin-bottom: 34px;
`;

export const WrapDaysStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    place-items: center;
    gap: 20px;
    max-width: 388px;

    span,
    button {
        width: 30px;
        height: 30px;
        font-size: 14px;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const WeekDaysNameStyled = styled.span`
    font-weight: 500;
    border-radius: 100%;
    background: ${props => props.theme.colorSchema.backgroundBaseLevel2};
    color: ${props => props.theme.colorSchema.textBase};
`;

export const DaysInMonthStyled = styled.button`
    cursor: pointer;

    ${props =>
        props.currentDay
            ? `
            background: ${props.theme.colorSchema.backgroundHighlight};
            color: ${props.theme.colorSchema.backgroundBase};
            border-radius: 100%;
            font-weight: 500;
            `
            : `
            color: ${props.theme.colorSchema.textBaseLevel3};
            border-radius: 8px;
            background: none;
            `}

    &:hover, &:active, &:focus {
        border: 1px solid ${props => props.theme.colorSchema.backgroundHighlight};
    }
`;
