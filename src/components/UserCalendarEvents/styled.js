import styled from 'styled-components';

export const ContainerStyled = styled.div`
    position: absolute;
    top: 0;
    width: 307px;
    left: calc(388px + 64px * 2 + 2px);
`;

export const TitleStyled = styled.h3`
    font-size: 14px;
    color: ${props => props.theme.colorSchema.textBaseLevel3};
    font-weight: 500;
    margin-bottom: 20px;
`;

export const WrapListStyled = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 30px calc(100% - 50px);
    justify-content: center;
    align-items: center;
    gap: 10px 20px;
    margin-left: 8px;

    & > span:nth-child(1) {
        background: ${props => props.theme.colorSchema.backgroundHighlight};
        color: ${props => props.theme.colorSchema.backgroundBase};
        border-radius: 100%;
        font-weight: 500;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    span,
    p,
    h4 {
        font-size: 14px;
        color: ${props => props.theme.colorSchema.textBaseLevel3};
    }

    h4 {
        position: absolute;
        top: 45px;
        left: 0;
    }
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

    span {
        letter-spacing: 1px;
    }

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
