// Copyright 2019-2020 @polkadot/extension-ui authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ThemeProps } from '../types';

import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

import copy from '../assets/copy.svg';
import useTranslation from '../hooks/useTranslation';
import ActionText from './ActionText';
import TextAreaWithLabel from './TextAreaWithLabel';

interface Props {
  seed: string;
  onCopy: MouseEventHandler<HTMLDivElement>;
  className?: string;
}

function MnemonicSeed ({ className, onCopy, seed }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <TextAreaWithLabel
        className='mnemonicDisplay'
        isReadOnly
        label={t<string>('Generated 12-word mnemonic seed:')}
        value={seed}
      />
      <div className='buttonsRow'>
        <ActionText
          className='copyBtn'
          data-seed-action='copy'
          icon={copy}
          onClick={onCopy}
          text={t<string>('Copy to clipboard')}
        />
      </div>
    </div>
  );
}

export default styled(MnemonicSeed)(({ theme }: ThemeProps) => `
  margin-bottom: 21px;

  .buttonsRow {
    display: flex;
    flex-direction: row;

    .copyBtn {
      margin-right: 32px;
    }
  }

  .mnemonicDisplay {
    textarea {
      color: ${theme.primaryColor};
      font-size: ${theme.fontSize};
      height: unset;
      letter-spacing: -0.01em;
      line-height: ${theme.lineHeight};
      margin-bottom: 10px;
      padding: 14px;
    }
  }
`);
