/* eslint-disable import/no-cycle */
import { Skeleton, Table, type TableProps } from 'antd';
import type { AnyObject } from 'antd/es/_util/type';
import type { TableLocale } from 'antd/es/table/interface';
import { IconSvgLocal } from 'components/icon-vec-local';
import { TextBase } from 'components/text';
import { forwardRef } from 'react';

export interface AppTableProps extends Omit<TableProps<AnyObject>, 'bordered'> {
  rounded?: boolean;
  loading?: boolean;
  emptyText?: string;
  emptyComponent?: React.ReactNode;
}

const AppTable = (
  {
    loading,
    emptyText,
    emptyComponent,
    rounded = false,
    size = 'small',
    pagination = false,
    ...restProps
  }: AppTableProps,
  ref: Parameters<typeof Table>[0]['ref']
) => {
  const locale: TableLocale = {
    ...restProps.locale,
    emptyText: (
      <Skeleton active loading={loading} paragraph={{ rows: 4 }} title={false}>
        {emptyComponent || <TextBase t18n={emptyText || 'text:no_data'} />}
      </Skeleton>
    )
  };

  return (
    <Table
      ref={ref}
      size={size}
      data-rounded={rounded}
      pagination={
        pagination && {
          ...pagination,
          position: ['bottomCenter'],
          hideOnSinglePage: true,
          prevIcon: (
            // eslint-disable-next-line tailwindcss/no-custom-classname
            <div className="ant-pagination-item-link">
              <IconSvgLocal
                name="ICON_ARROW_LEFT"
                height={20}
                width={20}
                fill="rgb(var(--color-600))"
              />
            </div>
          ),
          nextIcon: (
            // eslint-disable-next-line tailwindcss/no-custom-classname
            <div className="ant-pagination-item-link">
              <IconSvgLocal
                name="ICON_ARROW_LEFT"
                height={20}
                width={20}
                fill="rgb(var(--color-600))"
              />
            </div>
          )
        }
      }
      locale={locale}
      {...restProps}
    />
  );
};

export default forwardRef(AppTable);
