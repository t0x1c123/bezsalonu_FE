import { Button, Card } from 'antd';
import React from 'react';

import * as S from './Offer.style';

export const Offer: React.FC = () => {
  return (
    <S.Container>
      <Card title="Kadeřnice Marie" bordered hoverable extra={<Button>Přidat do oblíbených</Button>}>
        Nabízím stříhání mužu a žen doma za rozumné ceny. Dělam melíry a jine pičoviny. Přijedu k až k Vám domů za
        rozumnou cenu.
      </Card>
    </S.Container>
  );
};
