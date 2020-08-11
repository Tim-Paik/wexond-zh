import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { hot } from 'react-hot-loader/root';

import store from '../../store';
import { ThemeProvider } from 'styled-components';
import { Wrapper, Content, IconItem, Menu, Image, RightBar } from './style';
import { TopSites } from '../TopSites';
import { News } from '../News';
import { WEBUI_BASE_URL, WEBUI_URL_SUFFIX } from '~/constants/files';
import { Preferences } from '../Preferences';
import {
  ICON_TUNE,
  ICON_SETTINGS,
  ICON_HISTORY,
  ICON_BOOKMARKS,
  ICON_DOWNLOAD,
  ICON_EXTENSIONS,
} from '~/renderer/constants/icons';
import { WebUIStyle } from '~/renderer/mixins/default-styles';

window.addEventListener('mousedown', () => {
  store.dashboardSettingsVisible = false;
});

const onIconClick = (name: string) => () => {
  window.location.href = `${WEBUI_BASE_URL}${name}${WEBUI_URL_SUFFIX}`;
};

const onTuneClick = () => {
  store.dashboardSettingsVisible = !store.dashboardSettingsVisible;
};

const onRefreshClick = () => {
  store.image = '';
  setTimeout(() => {
    localStorage.setItem('imageDate', '');
    store.loadImage();
  }, 50);
};

export default hot(
  observer(() => {
    return (
      <ThemeProvider theme={{ ...store.theme }}>
        <div>
          <WebUIStyle />

          <Preferences />

          <Wrapper fullSize={store.fullSizeImage}>
            <Image src={store.imageVisible ? store.image : ''}></Image>
            <Content>{store.topSitesVisible && <TopSites></TopSites>}</Content>

            <RightBar>
              <IconItem
                imageSet={store.imageVisible}
                title="Dashboard settings"
                icon={ICON_TUNE}
                onMouseDown={(e) => e.stopPropagation()}
                onClick={onTuneClick}
              ></IconItem>
            </RightBar>
            {store.quickMenuVisible && (
              <Menu>
                <IconItem
                  imageSet={store.imageVisible}
                  title="设置"
                  icon={ICON_SETTINGS}
                  onClick={onIconClick('settings')}
                ></IconItem>
                <IconItem
                  imageSet={store.imageVisible}
                  title="历史记录"
                  icon={ICON_HISTORY}
                  onClick={onIconClick('history')}
                ></IconItem>
                <IconItem
                  imageSet={store.imageVisible}
                  title="书签"
                  icon={ICON_BOOKMARKS}
                  onClick={onIconClick('bookmarks')}
                ></IconItem>
                <IconItem
                  imageSet={store.imageVisible}
                  title="下载内容"
                  icon={ICON_DOWNLOAD}
                  onClick={onIconClick('downloads')}
                ></IconItem>
                <IconItem
                  imageSet={store.imageVisible}
                  title="扩展程序"
                  icon={ICON_EXTENSIONS}
                  onClick={onIconClick('extensions')}
                ></IconItem>
              </Menu>
            )}
          </Wrapper>
          {store.newsBehavior !== 'hidden' && (
            <Content>
              <News></News>
            </Content>
          )}
        </div>
      </ThemeProvider>
    );
  }),
);
