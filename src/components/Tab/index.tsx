import React, { FC } from 'react';
import { useTabState, Tab as ReakitTab, TabList } from 'reakit/Tab';
import { StyledTabPanel, StyledFlex } from './Styles';
import { ITabProps } from './types';

const Tab: FC<ITabProps> = ({ id, name, data, defaultTabId }) => {
  const tabState = useTabState({ selectedId: defaultTabId });
  return (
    <>
      <StyledFlex flexDirection="column">
        <TabList {...tabState} aria-label={name}>
          {data.map(tab => {
            return (
              <ReakitTab {...tabState} stopId={tab.id} key={tab.id}>
                {tab.name}
              </ReakitTab>
            );
          })}
        </TabList>
        {data.map(tab => {
          return (
            <StyledTabPanel {...tabState} stopId={tab.id} key={tab.id}>
              {tab.component}
            </StyledTabPanel>
          );
        })}
      </StyledFlex>
    </>
  );
};

Tab.defaultProps = {
  data: [],
};

export default Tab;
