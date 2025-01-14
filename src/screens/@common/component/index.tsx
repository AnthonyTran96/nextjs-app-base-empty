/* eslint-disable tailwindcss/no-custom-classname */
'use client';
import { AppCheckbox, ButtonBase, IconSvgLocal, InfoBox, TextBase } from 'components';
import { showDialog } from 'components/dialog';
import { TYPE_ACTION, TYPE_MESSAGE } from 'components/dialog/type';
import ProgressBar, { TypeProgressBar } from 'components/progressbar';
import Status, { KIND_STATUS, TYPE_STATUS } from 'components/status';

const ComponentPage = () => {
  const name = 'Anthony';

  return (
    <>
      <div className="title3">- Button Component</div>
      <div>
        {/* demo khi có customContent */}
        <ButtonBase type="primary" customContent="Primary" classNames="m-4" />
        <ButtonBase type="primary" disabled customContent="Disabled Primary" classNames="m-4" />

        <ButtonBase type="secondary" customContent="Secondary" classNames="m-4" />
        <ButtonBase type="secondary" disabled customContent="Disabled Secondary" classNames="m-4" />

        <ButtonBase type="ghost" customContent="Ghost" classNames="m-4" />
        <ButtonBase type="ghost" customContent="Disabled Ghost" disabled classNames="m-4" />

        <ButtonBase type="whiteGhost" customContent="White Ghost" classNames="m-4" />
        <ButtonBase
          type="whiteGhost"
          customContent="Disabled WhiteGhost"
          disabled
          classNames="m-4"
        />

        <ButtonBase
          type="primary"
          customContent="Primary with Icon"
          leftIcon="ICON_EDIT"
          rightIcon="ICON_ARROW_CIRCLE_UP"
          classNames="m-4"
        />
        <ButtonBase
          type="primary"
          customContent="Primary with Icon"
          leftIcon="ICON_EDIT"
          classNames="m-4"
        />
        <ButtonBase type="primary" leftIcon="ICON_EDIT" />
      </div>
      <div className="title3">- Typography</div>
      <div className="mt-4 flex">
        <div className="mr-8">
          <div className="h1">h1</div>
          <div className="h2">h2</div>
          <div className="h3">h3</div>
          <div className="h4">h4</div>
        </div>
        <div className="mr-8">
          <div className="title1">title1</div>
          <div className="title2">title2</div>
          <div className="title3">title3</div>
          <div className="title4">title4</div>
          <div className="title5">title5</div>
        </div>
        <div className="mr-8">
          <div className="sub-title1">sub-title1</div>
          <div className="sub-title2">sub-title2</div>
          <div className="sub-title3">sub-title3</div>
          <div className="sub-title4">sub-title4</div>
        </div>
        <div className="mr-8">
          <div className="body1">body1</div>
          <div className="body2">body2</div>
          <div className="body3">body3</div>
        </div>
        <div>
          <div className="caption1">caption1</div>
          <div className="caption2">caption2</div>
          <div className="caption3">caption3</div>
        </div>
      </div>
      <IconSvgLocal name="ICON_EDIT" width={100} height={100} />
      <TextBase t18n="text:hello" t18nOptions={{ name }} classNames="text-20 text-error-500" />
      <ButtonBase
        type="ghost"
        customContent="open dialog "
        onClick={() =>
          showDialog({
            title: 'alert notify',
            content: 'text:functions_in_development',
            type: TYPE_MESSAGE.ALERT,
            actions: [
              {
                title: 'text:close'
              }
            ]
          })
        }
      />
      <ButtonBase
        type="primary"
        customContent="open dialog "
        onClick={() =>
          showDialog({
            title: 'alert notify',
            content: 'text:functions_in_development',
            type: TYPE_MESSAGE.ALERT,
            actions: [
              {
                title: 'text:close',
                iconLeftName: 'ICON_EDIT',
                iconRightName: 'ICON_EDIT'
              },
              {
                title: 'text:cancel',
                type: TYPE_ACTION.SECONDARY
              },
              {
                title: 'text:link',
                type: TYPE_ACTION.LINK
              }
            ]
          })
        }
      />
      <ProgressBar
        stepTitles={['buoc 1', 'buoc 2', 'buoc 3', 'buoc 4', 'buoc 5']}
        classNames="py-12"
      />
      <ProgressBar
        stepTitles={['buoc 1', 'buoc 2', 'buoc 3', 'buoc 4', 'buoc 5']}
        currentStep={4}
        type={TypeProgressBar.LINE}
      />
      <InfoBox
        title="Thông tin người dùng"
        caption="Chuyển tiền giữa các tài khoản nội bộ của doanh nghiệp."
        icon="ICON_BILL"
        onClick={() => alert('23456')}
      />
      <InfoBox title="Thông" caption="text:copyright" icon="ICON_CHECK" classNames="w-[400px]" />
      <Status type={TYPE_STATUS.CONFIRM} content="23456" />
      <Status kind={KIND_STATUS.SECONDARY} type={TYPE_STATUS.CONFIRM} content="23456" />
      <Status kind={KIND_STATUS.GHOST} type={TYPE_STATUS.CONFIRM} content="23456" />
      <AppCheckbox
        direction="column"
        block
        options={[
          {
            label: <InfoBox title="A" caption="A" icon="ICON_ARROW_CIRCLE_UP" />,
            value: 'A'
          },
          {
            label: <InfoBox title="B" caption="B" icon="ICON_ARROW_CIRCLE_UP" />,
            value: 'B'
          }
        ]}
      />
      <AppCheckbox
        options={[
          {
            label: 'A',
            value: 'A'
          },
          {
            label: 'B',
            value: 'B'
          }
        ]}
      />
    </>
  );
};
export default ComponentPage;
