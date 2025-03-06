import React from "react";
import styled from "styled-components";

type RuleSectionProps = {
  title: string;
  children: React.ReactNode;
};

export const RuleSection = ({ title, children }: RuleSectionProps) => {
  return (
    <TextBox>
      <Title>{title}</Title>
      {children}
    </TextBox>
  );
};

type RuleListProps = {
  children: React.ReactNode;
};

export const RuleList = ({ children }: RuleListProps) => {
  return <List>{children}</List>;
};

type RuleListItemProps = {
  children: React.ReactNode;
};

export const RuleListItem = ({ children }: RuleListItemProps) => {
  return <ListItem>{children}</ListItem>;
};

type RuleTextProps = {
  children: React.ReactNode;
};

export const RuleText = ({ children }: RuleTextProps) => {
  return <Text>{children}</Text>;
};

const TextBox = styled.div`
  margin: 16px 0;
  border-top: 1px solid #121212;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-top: 16px;
  margin-bottom: 8px;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  word-break: keep-all;
  line-height: 1.5;
`;

const List = styled.ul`
  text-decoration: none;
  list-style: lower-roman;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const ListItem = styled.li`
  text-decoration: none;
  padding: 2px 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
`;
