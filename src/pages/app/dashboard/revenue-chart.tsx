import {
  CartesianGrid,
  Label,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { getDailyRevenueInPeriod } from '@/api/getDailyRevenueInPeriod'
import { DateRangePicker } from '@/components/ui/date-ranger-picker'
import { useMemo, useState } from 'react'
import { DateRange } from 'react-day-picker'
import { subDays } from 'date-fns'
import { formatCurrency } from '@/utils/format-currency'
import { Loader2 } from 'lucide-react'

export function RevenueChart() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date()
  })

  const { data: dailyRevenueInPeriod} = useQuery({
    queryFn: ()=> getDailyRevenueInPeriod({
      from: dateRange?.from,
      to: dateRange?.to
    }),
    queryKey: ['metrics','daily-revenue-in-period', dateRange]
  })

  
  const chartData = useMemo(()=>{
    return dailyRevenueInPeriod?.map((chartItem)=>{
      return {
        date: chartItem.date,
        receipt: chartItem.receipt / 100
      }
    })
  },[dailyRevenueInPeriod])

  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
        <div className='flex items-center gap-3'>
          <Label>Período</Label>
          <DateRangePicker date={dateRange} onDateChange={setDateRange}/>
        </div>
      </CardHeader>
      <CardContent>
        {chartData ? (
          <ResponsiveContainer width="100%" height={240}>
          <LineChart data={chartData} style={{ fontSize: 12 }}>
            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={88}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />

            <CartesianGrid vertical={false} className="stroke-muted" />
            <Line
              name="Receita"
              type="linear"
              strokeWidth={2}
              dataKey="receipt"
              stroke={colors.violet['500']}
            />
            <Tooltip wrapperClassName="!bg-accent border-0" />
          </LineChart>
        </ResponsiveContainer>
        ):(
          <div className='flex h-[240px] w-full items-center justify-center'>
            <Loader2 className='h-8 w-8 animate-spin text-muted-foreground'/>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
