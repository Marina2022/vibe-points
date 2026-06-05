'use client'

import React from 'react';
import Button from "@/components/ui/Button";
import ButtonWrapper from "@/components/ui/ButtonWrapper/ButtonWrapper";

const LogisticsButton = () => {
  return (
    <ButtonWrapper>
      {({setPopupOpen}) => (
        <Button
          className="xs:max-w-[260px]"
          variant="primary"
          onClick={() => setPopupOpen(true)}
        >
          Узнать подробнее
        </Button>
      )}
    </ButtonWrapper>
  );
};

export default LogisticsButton;