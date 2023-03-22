import styled from 'styled-components';

export const ContainerStyled = styled.div`
    position: absolute;
    top: 0;
    min-width: 307px;
    left: calc(388px + 64px * 2 + 2px);
`;

export const TitleStyled = styled.h3`
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 20px;

    ${props =>
        props.initialState
            ? `
            color: ${props.theme.colorSchema.textBaseLevel3};
    `
            : `
            color: ${props.theme.colorSchema.textBase};
            display: flex;
            align-items: center;
            gap: 10px;

            img {
                height: 16.5px;
            }
            
            span {
                font-size: 12px;
                height: 24px;
                width: 24px;
                border-radius: 100%;
                background: ${props.theme.colorSchema.backgroundBaseLevel2};
                color: ${props.theme.colorSchema.textBaseLevel3};
                display: flex;
                align-items: center;
                justify-content: center;
            }
    `}
`;

export const WrapListStyled = styled.div`
    position: relative;

    ${props =>
        props.initialState
            ? `
            display: grid;
            grid-template-columns: 30px calc(100% - 50px);
            justify-content: center;
            align-items: center;
            gap: 10px 20px;
            margin-left: 8px;
   
            & > span:nth-child(1) {
                background: ${props.theme.colorSchema.backgroundHighlight};
                color: ${props.theme.colorSchema.backgroundBase};
                border-radius: 100%;
                font-weight: 500;
                width: 30px;
                height: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            
            span,
            p {
                font-size: 14px;
                color: ${props.theme.colorSchema.textBaseLevel3};
            }
    `
            : `
            display: flex;
            flex-direction: column;
            gap: 18px;
    `}
`;

export const DayButtonStyled = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: none;
    position: relative;
    padding-bottom: 10px;
    width: 30px;
    height: 30px;

    &::before,
    &::after {
        content: '';
        position: absolute;
        bottom: 1px;
        width: 6px;
        height: 6px;
        border-radius: 100%;
    }

    ${props => {
        let dayEventKey = props.dayEvents;

        // Checking sorted day event true type
        if (dayEventKey === 'negativeValue' && props.arrayLength > 1) {
            dayEventKey = 'onlyNegativeValues';
        } else if (dayEventKey == 'positiveValue' && props.arrayLength > 1) {
            dayEventKey = 'onlyPositiveValues';
        }

        switch (dayEventKey) {
            case 'mixedValues':
                return `
                    &::before {
                        left: 6px;
                        background: ${props.theme.colorSchema.backgroundHighlight};
                    }
                    
                    &::after {
                        left: 18px;
                        background: ${props.theme.colorSchema.backgroundHighlightLevel3};
                    }
                    `;

            case 'onlyPositiveValues':
                return `
                        &::before {
                            left: 6px;
                            background: ${props.theme.colorSchema.backgroundHighlight};
                        }
                        
                        &::after {
                            left: 18px;
                            background: ${props.theme.colorSchema.backgroundHighlight};
                        }
                `;

            case 'onlyNegativeValues':
                return `
                        &::before {
                            left: 6px;
                            background: ${props.theme.colorSchema.backgroundHighlightLevel3};
                        }
                        
                        &::after {
                            left: 18px;
                            background: ${props.theme.colorSchema.backgroundHighlightLevel3};
                        }
                `;

            case 'negativeValue':
                return `  
                        &::after {
                            left: 12px;
                            background: ${props.theme.colorSchema.backgroundHighlightLevel3};
                        }
                `;

            case 'positiveValue':
                return `
                        &::before {
                            left: 12px;
                            background: ${props.theme.colorSchema.backgroundHighlight};
                        }
                `;

            default:
                return null;
        }
    }}
`;

export const NoEventsTitleStyled = styled.h4`
    font-size: 14px;
    color: ${props => props.theme.colorSchema.textBaseLevel3};
    position: absolute;
    top: ${props => (props.initialState ? '45px' : '0')};
    left: 0;
`;

export const UserEventStyled = styled.div`
    background: ${props => props.theme.colorSchema.backgroundBaseLevel3};
    width: 388px;
    padding: 9px 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 8px 1px rgba(224, 232, 240, 0.4);
    border-radius: 4px;

    & > div {
        display: flex;
        align-items: center;
        gap: 12px;

        img {
            height: 32px;
        }

        h5 {
            color: ${props => props.theme.colorSchema.textBaseLevel4};
            font-size: 12px;
            font-weight: 500;
            margin-bottom: 3px;
        }

        p {
            color: ${props => props.theme.colorSchema.textBaseLevel2};
            font-size: 10px;
            text-transform: capitalize;
        }
    }
`;

export const UserValueStyled = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: ${props =>
        props.isValueNegative
            ? props.theme.colorSchema.backgroundHighlightLevel3
            : props.theme.colorSchema.backgroundHighlight};
`;
