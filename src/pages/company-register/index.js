import React from 'react';
import MaterialIcon from 'material-icons-react';

import logo from '@images/Logo.svg';
import left from '@images/fx_purple.svg';
import bottom from '@images/fx_bottom_purple.svg';
import linkedin from '@images/linkedin.svg';
import github from '@images/github_white.svg';

import { LeftEffect, BottomEffect } from '@/globalStyles/effects';

import {
  Root,
  HeaderLogin,
  Wrapper,
  InsideWrapper,
  RegisterWrapper,
  Form,
  Inputs,
  StyledInput,
  Button,
  SocialLinks,
} from './styles';

import colors from '@/globalStyles/colors';

const CompanyRegister = () => (
  <Root>
    <HeaderLogin mobile>
      <img src={logo} alt="Logo Te Emprego" />
    </HeaderLogin>
    <LeftEffect mobile>
      <img src={left} alt="left effect" />
    </LeftEffect>

    <Wrapper>
      <InsideWrapper>
        <h1>Cadastro</h1>
        <p>Ficamos felizes em saber que quer anunciar conosco!</p>

        <RegisterWrapper>
          <Form>
            <Inputs>
              <div>
                <StyledInput type="text" placeholder="email" />
                <StyledInput type="password" placeholder="senha" />
                <StyledInput type="text" placeholder="nome da empresa" />
                <StyledInput type="text" placeholder="telefone" />
              </div>

              <div>
                <StyledInput type="text" placeholder="categoria da empresa" />
                <StyledInput type="text" placeholder="tamanho da empresa" />
                <StyledInput type="text" placeholder="resumo da empresa" />
                <label htmlFor="upload" id="file">
                  <StyledInput
                    type="file"
                    id="upload"
                    placeholder="imagem de perfil"
                  />
                  imagem do perfil
                  <MaterialIcon icon="cloud_upload" color={colors.darken} />
                </label>
              </div>
            </Inputs>
            <div>
              <Button type="submit">Cadastrar</Button>
              <p>Ao clicar no botão acima, você declara que aceita os nossos</p>
              <a>Termos de Uso e Política de Privacidade</a>
            </div>
          </Form>
        </RegisterWrapper>

        <SocialLinks>
          <p>ou invés disso, cadastre-se com</p>
          <div>
            <button type="button">
              <img src={linkedin} alt="LinkedIn" />
              <span>LinkedIn</span>
            </button>
            <button type="button">
              <img src={github} alt="GitHub" />
              <span>GitHub</span>
            </button>
          </div>
        </SocialLinks>
      </InsideWrapper>
    </Wrapper>

    <BottomEffect register>
      <img src={bottom} alt="bottom effect" />
    </BottomEffect>
  </Root>
);

export default CompanyRegister;
