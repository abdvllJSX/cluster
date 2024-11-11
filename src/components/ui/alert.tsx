import { ALERT_STATES } from "@/lib/utils.ts";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import * as React from "react";

export interface AlertProps {
  alertState?: string;
  message: string;
  title: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ alertState, message, title }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames({
          "rounded-[.25rem]": true,
          "p-4": true,
          "bg-red-50": alertState === ALERT_STATES.ERROR,
          "bg-green-50": alertState === ALERT_STATES.SUCCESS,
        })}
      >
        <div className="flex">
          <div className="shrink-0">
            {alertState === "error" && (
              <XCircleIcon
                aria-hidden="true"
                className={classNames({
                  "h-7": true,
                  "w-7": true,
                  "text-red-400": alertState === ALERT_STATES.ERROR,
                  "text-green-400": alertState === ALERT_STATES.SUCCESS,
                })}
              />
            )}
            {alertState === "success" && (
              <CheckCircleIcon
                aria-hidden="true"
                className={classNames({
                  "h-7": true,
                  "w-7": true,
                  "text-red-400": alertState === ALERT_STATES.ERROR,
                  "text-green-400": alertState === ALERT_STATES.SUCCESS,
                })}
              />
            )}
          </div>
          <div className="ml-3">
            <h3
              className={classNames({
                "text-lg": true,
                "font-medium": true,
                "text-red-800": alertState === ALERT_STATES.ERROR,
                "text-green-800": alertState === ALERT_STATES.SUCCESS,
              })}
            >
              {title}
            </h3>
            <div
              className={classNames({
                "mt-1": true,
                "text-lg": true,
                "text-red-700": alertState === ALERT_STATES.ERROR,
                "text-green-700": alertState === ALERT_STATES.SUCCESS,
              })}
            >
              {message}
            </div>
          </div>
        </div>
      </div>
    );
  },
);
Alert.displayName = "Alert";

export { Alert };
