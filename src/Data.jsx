import {
  Badge,
  Card,
  Icon,
  Modal,
  Scrollable,
  Stack,
  Tabs,
} from "@shopify/polaris";
import React from "react";
import { useState } from "react";
import { RiskMinor } from "@shopify/polaris-icons";
import { useNavigate } from "react-router-dom";

const ErrorModal = ({ errorModal, setErrorModal }) => {
  const navigate = useNavigate();

  // Selected Tab i.e. product error and variant error tab state and its handle function
  const [selectedTab, setTabs] = useState(0);
  const handleSelectedTab = (selectedTabIdx) => setTabs(selectedTabIdx);

  const handleErrorModal = () => {
    setErrorModal((prev) => {
      return { ...prev, open: false };
    });
  };

  // Variable for product error length and product errors
  let productErrLength = 0;
  const productErrors = errorModal.type === "product" && (
    <Card>
      {errorModal.data?.items
        .filter(
          //filter item whose source product id matches with product
          (item) => item.source_product_id === errorModal.data.source_product_id
        )
        .map((item) => {
          // Find all errors in item
          return Object.entries(item?.error || {}).map(([key, value]) =>
            value.map((err, i) => {
              productErrLength++;
              return (
                <Card.Section title={key} key={i}>
                  <Stack>
                    <Icon source={RiskMinor} color="critical" />
                    <span>{err}</span>
                  </Stack>
                </Card.Section>
              );
            })
          );
        })}
    </Card>
  );

  // Variable for variant error length and variant errors
  let variantErrLength = 0;
  const variantErrors = (
    <Card>
      {errorModal.data?.items
        ?.filter(
          //filter item whose source product id not matches with product
          (item) => item.source_product_id !== errorModal.data.source_product_id
        )
        .map((item) => {
          // Find all errors in item
          return Object.entries(item?.error || {}).map(([key, value]) =>
            value.map((err, i) => {
              variantErrLength++;
              return (
                <Card.Section title={key} key={i}>
                  <Stack>
                    <Icon source={RiskMinor} color="critical" />
                    <span>{err}</span>
                  </Stack>
                </Card.Section>
              );
            })
          );
        })}
    </Card>
  );

  return (
    <Modal
      open={errorModal.open}
      onClose={handleErrorModal}
      primaryAction={{
        content: "Fix Errors",
        onAction: () => navigate("/main/product_edit"),
      }}
      title="Errors"
      footer={
        <>
          Can’t find the solution? Contact us through
          <a
            target="_blank"
            className="Polaris-Link"
            href="mailto:channel-support@cedcommerce.com"
            rel="noopener noreferrer"
            data-polaris-unstyled="true"
          >
            Email
          </a>
          ,
          <a
            target="_blank"
            className="Polaris-Link"
            href="https://join.skype.com/xV5r9L7s6jFG"
            rel="noopener noreferrer"
            data-polaris-unstyled="true"
          >
            Skype
          </a>{" "}
          or{" "}
          <a
            target="_blank"
            className="Polaris-Link"
            href="https://chat.whatsapp.com/GOFQ2Gsg7rdBjBSzE9NGAA"
            rel="noopener noreferrer"
            data-polaris-unstyled="true"
          >
            Whatsapp
          </a>
        </>
      }
    >
      <Card title="Errors">
        <Tabs
          fitted
          tabs={[
            {
              id: "product",
              content: (
                <span>
                  Product Errors <Badge>{productErrLength}</Badge>
                </span>
              ),
            },
            {
              id: "variant",
              content: (
                <span>
                  Variant Errors <Badge>{variantErrLength}</Badge>
                </span>
              ),
            },
          ]}
          selected={selectedTab}
          onSelect={handleSelectedTab}
        >
          <Scrollable style={{ height: "300px" }}>
            {/* Show no product image if nothing to display */}
            {selectedTab === 0 &&
              // No error will be shown in product type if type is variant
              (errorModal.type === "product" && productErrLength > 0 ? (
                productErrors
              ) : (
                <Stack vertical alignment="center">
                  <img
                    src="https://multi-account.sellernext.com/apps/amazon-multi/902e6225075f4dc2f9fe944f578a4ad2.png"
                    alt=""
                  />
                  <span> No Error in Product</span>
                </Stack>
              ))}
            {selectedTab === 1 &&
              (variantErrLength > 0 ? (
                variantErrors
              ) : (
                <Stack vertical alignment="center">
                  <img
                    src="https://multi-account.sellernext.com/apps/amazon-multi/902e6225075f4dc2f9fe944f578a4ad2.png"
                    alt=""
                  />
                  <span> No Error in Variant</span>
                </Stack>
              ))}
          </Scrollable>
        </Tabs>
      </Card>
    </Modal>
  );
};

export default ErrorModal;
