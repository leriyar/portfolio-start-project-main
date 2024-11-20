import React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/Button";
import {SectionTitle} from "../../../components/SectionTitle";

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                <Field placeholder={"name"}/>
                <Field placeholder={"subject"}/>
                <Field placeholder={"message"} as={"textarea"}/>
                <Button type={"submit"}>send message</Button>
            </StyledForm>
        </StyledContact>
    );
};

const StyledContact = styled.section `
    min-height: 50vh;
    background-color: #ada884;
`

const StyledForm = styled.form `
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`

const Field = styled.input `
    
`
