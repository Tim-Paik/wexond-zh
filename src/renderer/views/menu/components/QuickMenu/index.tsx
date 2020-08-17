import * as React from 'react';
import { observer } from 'mobx-react-lite';

import {
  Line,
  MenuItem,
  MenuItems,
  Content,
  Icon,
  MenuItemTitle,
  Shortcut,
  RightControl,
} from './style';
import store from '../../store';
import { ipcRenderer, remote } from 'electron';
import { WEBUI_BASE_URL, WEBUI_URL_SUFFIX } from '~/constants/files';
import { Switch } from '~/renderer/components/Switch';
import {
  ICON_FIRE,
  ICON_TOPMOST,
  ICON_TAB,
  ICON_WINDOW,
  ICON_INCOGNITO,
  ICON_HISTORY,
  ICON_BOOKMARKS,
  ICON_SETTINGS,
  ICON_EXTENSIONS,
  ICON_DOWNLOAD,
  ICON_FIND,
  ICON_PRINT,
} from '~/renderer/constants/icons';

const onFindClick = () => {
  /*
  // TODO(sentialx): get selected tab
  ipcRenderer.send(
    `find-show-${store.windowId}`,
    store.tabs.selectedTab.id,
    store.tabs.selectedTab.findInfo,
  );*/
};

const onDarkClick = () => {
  store.settings.darkContents = !store.settings.darkContents;
  store.save();
};

const onPrintClick = () => {
  ipcRenderer.send('Print', null);
  store.hide();
};

const onFindInPageClick = () => {
  ipcRenderer.send(`find-in-page-${store.windowId}`);
  store.hide();
};

const onAlwaysClick = () => {
  store.alwaysOnTop = !store.alwaysOnTop;
  remote.getCurrentWindow().setAlwaysOnTop(store.alwaysOnTop);
};

const onNewWindowClick = () => {
  ipcRenderer.send('create-window');
};

const onIncognitoClick = () => {
  ipcRenderer.send('create-window', true);
};

const addNewTab = (url: string) => {
  ipcRenderer.send(`add-tab-${store.windowId}`, {
    url,
    active: true,
  });
  store.hide();
};

const goToWebUIPage = (name: string) => () => {
  addNewTab(`${WEBUI_BASE_URL}${name}${WEBUI_URL_SUFFIX}`);
};

const goToURL = (url: string) => () => {
  addNewTab(url);
};

const onUpdateClick = () => {
  ipcRenderer.send('install-update');
};

export const QuickMenu = observer(() => {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
      }}
    >
      <Content>
        <MenuItems>
          {store.updateAvailable && (
            <>
              <MenuItem onClick={onUpdateClick}>
                <Icon icon={ICON_FIRE}></Icon>
                <MenuItemTitle>升级 {remote.app.name}</MenuItemTitle>
              </MenuItem>
              <Line />
            </>
          )}
          <MenuItem onClick={onAlwaysClick}>
            <Icon icon={ICON_TOPMOST} />
            <MenuItemTitle>总是置顶</MenuItemTitle>
            <RightControl>
              <Switch dense value={store.alwaysOnTop}></Switch>
            </RightControl>
          </MenuItem>
          <Line />
          <MenuItem onClick={goToWebUIPage('newtab')}>
            <Icon icon={ICON_TAB} />
            <MenuItemTitle>新建标签页</MenuItemTitle>
            <Shortcut>Ctrl+T</Shortcut>
          </MenuItem>
          <MenuItem onClick={onNewWindowClick}>
            <Icon icon={ICON_WINDOW} />
            <MenuItemTitle>新建窗口</MenuItemTitle>
            <Shortcut>Ctrl+N</Shortcut>
          </MenuItem>
          <MenuItem onClick={onIncognitoClick}>
            <Icon icon={ICON_INCOGNITO} />
            <MenuItemTitle>新建无痕窗口</MenuItemTitle>
            <Shortcut>Ctrl+Shift+N</Shortcut>
          </MenuItem>
          <Line />
          <MenuItem onClick={goToWebUIPage('history')} arrow>
            <Icon icon={ICON_HISTORY} />
            <MenuItemTitle>历史记录</MenuItemTitle>
          </MenuItem>
          <MenuItem onClick={goToWebUIPage('bookmarks')} arrow>
            <Icon icon={ICON_BOOKMARKS} />
            <MenuItemTitle>书签</MenuItemTitle>
          </MenuItem>
          <MenuItem disabled onClick={goToWebUIPage('downloads')}>
            <Icon icon={ICON_DOWNLOAD} />
            <MenuItemTitle>下载内容</MenuItemTitle>
          </MenuItem>
          <Line />
          <MenuItem onClick={goToWebUIPage('settings')}>
            <Icon icon={ICON_SETTINGS} />
            <MenuItemTitle>设置</MenuItemTitle>
          </MenuItem>
          {/* TODO: <MenuItem onClick={goToWebUIPage('extensions')}> */}
          <MenuItem
            onClick={goToURL(
              'https://chrome.google.com/webstore/category/extensions',
            )}
          >
            <Icon icon={ICON_EXTENSIONS} />
            <MenuItemTitle>扩展程序</MenuItemTitle>
          </MenuItem>
          <Line />
          <MenuItem onClick={onFindInPageClick}>
            <Icon icon={ICON_FIND} />
            <MenuItemTitle>查找</MenuItemTitle>
            <Shortcut>Ctrl+F</Shortcut>
          </MenuItem>
          <MenuItem onClick={onPrintClick}>
            <Icon icon={ICON_PRINT} />
            <MenuItemTitle>打印</MenuItemTitle>
            <Shortcut>Ctrl+P</Shortcut>
          </MenuItem>
        </MenuItems>
      </Content>
    </div>
  );
});
