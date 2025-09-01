'use client';
import { ChangeEventHandler, FC, SyntheticEvent, useMemo, useState } from 'react';
import { Box, Button, Collapse, Link, SliderOwnProps, Stack, Typography } from '@mui/material';
import { StyledTabs, StyledTab } from '@/components/tabs';
import { StyledInput, StyledSlider } from '@/components/pricing-calculator/styled';
import { TypoH3, TypoP1 } from '@/components/common';
import { Faqs } from '@/components/pricing/faqs';

const maxNoOfSeats = 500;
const maxAutomationRunnerMinutes = 20000;

export const includedAutomationRunnerMinutesPlusPlan = 300;
export const includedAutomationRunnerMinutesProPlan = 1000;

export const pricePerSeat = 19;
export const flatFeeInUsdForUnlimitedSeats = 299;
export const automationRunnerMinutesOverageRateInUsd = 0.06;

interface ICalcRow {
  title: string;
  value: number;
  maxValue?: number;
  keyValues: { key: string; value: string }[];
  onValueChange: (value: number) => void;
  toggleCalculation?: boolean;
}

interface IBreakdownRow {
  title: string;
  subTitle: string;
  amount: number;
}

interface IKeyValueRow {
  title: string;
  value: string;
}

interface IPriceCard {
  planType: PlanType;
  pricePerSeat: number;
  noOfSeats: number;
  deploymentsOverageRate: number;
  deploymentMinutes: number;
  includedDeploymentMinutes: number;
}

type PlanType = 'plus' | 'pro';

const calculateFinalQuantity = (qty = 0, included = 0) => {
  return qty - included > 0 ? qty - included : 0;
};

const calculateTotal = (qty = 0, rate = 0) => {
  return parseFloat((qty * rate).toFixed(3));
};

const KeyValueRow: FC<IKeyValueRow> = ({ title, value }) => {
  return (
    <Typography
      component="span"
      className="text-base font-normal text-text-secondary leading-[25px]"
    >
      {title} :{' '}
      <Typography component="span" className="text-base font-normal text-white leading-[25px]">
        {value}
      </Typography>
    </Typography>
  );
};

const CalcRow: FC<ICalcRow> = ({
  title,
  value,
  maxValue = 100,
  keyValues,
  onValueChange,
  toggleCalculation,
}) => {
  const [showCalculation, setShowCalculation] = useState(false);

  const lastRecord = keyValues.length ? keyValues[keyValues.length - 1] : { key: '', value: '' };
  const records = useMemo(
    () => (toggleCalculation ? keyValues.slice(0, -1) : keyValues),
    [keyValues, toggleCalculation]
  );

  const handleSliderChange: SliderOwnProps['onChange'] = (_, newValue) => {
    const sliderValue = Array.isArray(newValue) ? newValue[0] : newValue;
    onValueChange(sliderValue > maxValue ? maxValue : sliderValue < 0 ? 0 : sliderValue);
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputValue = Number(e.target.value);
    onValueChange(inputValue > maxValue ? maxValue : inputValue < 0 ? 0 : inputValue);
  };

  return (
    <Stack className="gap-6">
      <Stack className="flex-row gap-6 justify-between">
        <Stack className="gap-1">
          <Typography className="text-xl font-medium leading-[38px]">{title}</Typography>
          {records.map((object, index) => (
            <KeyValueRow key={index} title={object.key} value={object.value} />
          ))}
          {toggleCalculation && (
            <>
              <Collapse in={showCalculation}>
                <KeyValueRow title={lastRecord.key} value={lastRecord.value} />
              </Collapse>
              <Typography
                className="text-base font-normal text-[#0099FF] leading-[25px] cursor-pointer"
                onClick={() => setShowCalculation((prev) => !prev)}
              >
                {`${showCalculation ? 'Hide' : 'Show'}`} Calculation
              </Typography>
            </>
          )}
        </Stack>
        <StyledInput
          className="mt-auto"
          type="number"
          value={value}
          slotProps={{ input: { step: 1, min: 0, max: maxValue } }}
          onChange={handleInputChange}
        />
      </Stack>
      <StyledSlider
        defaultValue={30}
        min={0}
        max={maxValue}
        value={value}
        onChange={handleSliderChange}
      />
    </Stack>
  );
};

const BreakdownRow: FC<IBreakdownRow> = ({ title, subTitle, amount }) => {
  return (
    <Stack className="gap-2 pb-2">
      <Typography className="text-[16px] text-text-secondary font-normal leading-[12px]">
        {title}
      </Typography>
      <Stack className="flex-row justify-between items-center gap-1">
        <Typography className="text-[15px] font-normal leading-[25px] ">{subTitle}</Typography>
        <Typography className="text-[16px] font-normal leading-[25px]">${amount}</Typography>
      </Stack>
    </Stack>
  );
};

const PriceCard: FC<IPriceCard> = ({
  planType,
  pricePerSeat,
  noOfSeats,
  deploymentsOverageRate,
  deploymentMinutes,
  includedDeploymentMinutes,
}) => {
  const seatSubTotal = useMemo(
    () =>
      planType === 'pro' ? flatFeeInUsdForUnlimitedSeats : calculateTotal(noOfSeats, pricePerSeat),
    [noOfSeats, pricePerSeat, planType]
  );

  const automationRunnerMinutesOverageQuantity = useMemo(
    () => calculateFinalQuantity(deploymentMinutes, includedDeploymentMinutes),
    [deploymentMinutes, includedDeploymentMinutes]
  );

  const automationRunnerMinutesOverageSubTotal = useMemo(
    () => calculateTotal(automationRunnerMinutesOverageQuantity, deploymentsOverageRate),
    [automationRunnerMinutesOverageQuantity, deploymentsOverageRate]
  );

  const monthlySpend = useMemo(
    () => parseFloat((seatSubTotal + automationRunnerMinutesOverageSubTotal).toFixed(3)),
    [seatSubTotal, automationRunnerMinutesOverageSubTotal]
  );

  return (
    <Stack className="w-full p-6 gap-10 rounded-2xl border-2 border-[#0c0c0c] bg-[linear-gradient(132deg,_#000000_26.51%,_#FDA935_430.25%)]">
      <Stack className="gap-3 items-center text-center">
        <TypoP1>Grand Total</TypoP1>
        <TypoH3>${monthlySpend}</TypoH3>
      </Stack>
      <Stack className="gap-4">
        <Typography className="text-[16px] font-semibold leading-[23px]">
          Price Breakdown :
        </Typography>
        <BreakdownRow
          title="Seats"
          subTitle={
            planType === 'pro' ? 'Unlimited' : `${noOfSeats} Seats x $${pricePerSeat} per seat`
          }
          amount={seatSubTotal}
        />
        <BreakdownRow
          title="Automation Runner Minutes"
          subTitle={`${automationRunnerMinutesOverageQuantity} Minutes X ${deploymentsOverageRate} per Minute`}
          amount={automationRunnerMinutesOverageSubTotal}
        />
      </Stack>
      <Button
        className="bg-[#0095FF] px-5 py-3 rounded-[10px] h-10"
        LinkComponent={Link}
        href="https://console.planton.cloud"
        target="_self"
      >
        Get Started
      </Button>
    </Stack>
  );
};

export const ContactSales: FC = ({}) => {
  return (
    <Stack className="rounded-2xl border-2 border-[#0c0c0c] max-w-[520px]">
      <Stack className="relative items-center text-center gap-4 p-6 rounded-t-2xl bg-[linear-gradient(132deg,_#000000_26.51%,_#FDA935_430%)]">
        <img className="w-[100px]" src={'/images/pricing/calculator/to-do-list.svg'} />
        <img
          className="absolute blur-3xl w-[100px]"
          src={'/images/pricing/calculator/to-do-list.svg'}
        />
        <Typography className="text-base font-medium leading-6">
          Need a plan that perfectly fits your unique requirements? We can work together to create a
          customized solution just for you. Get in touch with our team to explore tailored pricing
          and features that meet all your needs.
        </Typography>
      </Stack>
      <Box className="p-6 rounded-b-2xl bg-[linear-gradient(136deg,_#000000_-35.16%,_#FDA935_430%)]">
        <Button className="bg-[#0095FF] px-5 py-3 rounded-[10px] w-full h-10">Contact Sales</Button>
      </Box>
    </Stack>
  );
};

export const Calculation: FC = () => {
  const [planType, setPlanType] = useState<PlanType>('plus');
  const [noOfSeats, setNoOfSeats] = useState(10);
  const [automationRunnerMinutes, setAutomationRunnerMinutes] = useState(
    includedAutomationRunnerMinutesPlusPlan
  );
  const [automationRunnerMinutesUpdated, setAutomationRunnerMinutesUpdated] = useState(false);

  const includedAutomationRunnerMinutes = useMemo(
    () =>
      planType === 'pro'
        ? includedAutomationRunnerMinutesProPlan
        : includedAutomationRunnerMinutesPlusPlan,
    [planType]
  );

  const handleChange = (_: SyntheticEvent, newValue: PlanType) => {
    setPlanType(newValue);
    if (noOfSeats > maxNoOfSeats) setNoOfSeats(maxNoOfSeats);
    if (newValue === 'plus' && !automationRunnerMinutesUpdated) {
      setAutomationRunnerMinutes(includedAutomationRunnerMinutesPlusPlan);
    } else if (newValue === 'pro' && !automationRunnerMinutesUpdated) {
      setAutomationRunnerMinutes(includedAutomationRunnerMinutesProPlan);
    }
  };

  const handleSeatChange = (value: number) => {
    setNoOfSeats(value);
  };

  const handleDeploymentMinutesChange = (value: number) => {
    setAutomationRunnerMinutes(value);
    setAutomationRunnerMinutesUpdated(true);
  };

  return (
    <Stack className="items-center overflow-hidden ">
      <Stack id="calculator" className="items-center bg-[#010101] gap-20 pt-14 z-10">
        <StyledTabs
          value={planType}
          onChange={handleChange}
          TabIndicatorProps={{ style: { display: 'none' } }}
        >
          <StyledTab label="Plus" value="plus" />
          <StyledTab label="Pro" value="pro" />
        </StyledTabs>

        <Box className="w-[1200px] grid grid-cols-12 gap-16">
          <Stack className="col-span-7 gap-16">
            {planType === 'plus' && (
              <CalcRow
                title="Seats"
                value={noOfSeats}
                maxValue={maxNoOfSeats}
                onValueChange={handleSeatChange}
                keyValues={[
                  {
                    key: 'Price',
                    value: `$${pricePerSeat} / seat / month`,
                  },
                ]}
              />
            )}
            <CalcRow
              title="Automation Runner Minutes"
              value={automationRunnerMinutes}
              maxValue={maxAutomationRunnerMinutes}
              onValueChange={handleDeploymentMinutesChange}
              keyValues={[
                { key: 'Minutes Included', value: `${includedAutomationRunnerMinutes} Minutes` },
                {
                  key: 'Price Per Min',
                  value: `$${automationRunnerMinutesOverageRateInUsd} per minute`,
                },
              ]}
            />
          </Stack>
          <Box className="col-span-5">
            <PriceCard
              planType={planType}
              pricePerSeat={pricePerSeat}
              noOfSeats={noOfSeats}
              deploymentsOverageRate={automationRunnerMinutesOverageRateInUsd}
              deploymentMinutes={automationRunnerMinutes}
              includedDeploymentMinutes={includedAutomationRunnerMinutes}
            />
          </Box>
        </Box>
      </Stack>
      <Faqs />
    </Stack>
  );
};
