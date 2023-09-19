import styled from 'styled-components';
import { getColor } from './colors';

export const H1 = styled.h1`
    color: ${props => props.color ? getColor(props.color) : getColor('white')};
    font-size: ${props => props.size ? props.size : '48px'};
    font-weight: ${props => props.weight ? props.weight : 700};
    text-transform: ${props => props.transform != 'capitalize' ? props.transform == 'uppercase' ? 'uppercase' : props.transform !== 'lowercase' ? props.transform : 'lowercase' : 'capitalize'};
    margin: ${props => props.margin ? props.margin : 0};
    padding: ${props => props.padding ? props.padding : 0};
    text-align: ${props => props.align ? props.align : 'left'};
`;

export const H2 = styled.h2`
    color: ${props => props.color ? getColor(props.color) : getColor('white')};
    font-size: ${props => props.size ? props.size : '40px'};
    font-weight: ${props => props.weight ? props.weight : 600};
    text-transform: ${props => props.transform != 'capitalize' ? props.transform == 'uppercase' ? 'uppercase' : props.transform !== 'lowercase' ? props.transform : 'lowercase' : 'capitalize'};
    margin: ${props => props.margin ? props.margin : 0};
    padding: ${props => props.padding ? props.padding : 0};
    text-align: ${props => props.align ? props.align : 'left'};
`;

export const H3 = styled.h3`
    color: ${props => props.color ? getColor(props.color) : getColor('white')};
    font-size: ${props => props.size ? props.size : '32px'};
    font-weight: ${props => props.weight ? props.weight : 500};
    text-transform: ${props => props.transform != 'capitalize' ? props.transform == 'uppercase' ? 'uppercase' : props.transform !== 'lowercase' ? props.transform : 'lowercase' : 'capitalize'};
    margin: ${props => props.margin ? props.margin : 0};
    padding: ${props => props.padding ? props.padding : 0};
    text-align: ${props => props.align ? props.align : 'left'};
`;

export const H4 = styled.h4`
    color: ${props => props.color ? getColor(props.color) : getColor('white')};
    font-size: ${props => props.size ? props.size : '24px'};
    font-weight: ${props => props.weight ? props.weight : 400};
    text-transform: ${props => props.transform != 'capitalize' ? props.transform == 'uppercase' ? 'uppercase' : props.transform !== 'lowercase' ? props.transform : 'lowercase' : 'capitalize'};
    margin: ${props => props.margin ? props.margin : 0};
    padding: ${props => props.padding ? props.padding : 0};
    text-align: ${props => props.align ? props.align : 'left'};
`;

export const Text = styled.p`
    color: ${props => props.color ? getColor(props.color) : getColor('white')};
    font-size: ${props => props.size != 'lg' ? props.size == 'md' ? '14px' : props.size == 'sm' ? '10px' : props.size : '16px'};
    font-weight: ${props => props.weight ? props.weight : 400};
    text-transform: ${props => props.transform != 'capitalize' ? props.transform == 'uppercase' ? 'uppercase' : props.transform !== 'lowercase' ? props.transform : 'lowercase' : 'capitalize'};
    line-height: ${props => props.lineHeight ? props.lineHeight/2 : 1.5};
    margin: ${props => props.margin ? props.margin : 0};
    padding: ${props => props.padding ? props.padding : 0};
    text-align: ${props => props.align ? props.align : 'left'};
`;

H1.defaultProps = {
    transform: 'capitalize'
}
H2.defaultProps = {
    transform: 'capitalize'
}
H3.defaultProps = {
    transform: 'capitalize'
}
H4.defaultProps = {
    transform: 'capitalize'
}
Text.defaultProps = {
    size: 'lg',
    weight: 400,
    transform: 'capitalize'
}
