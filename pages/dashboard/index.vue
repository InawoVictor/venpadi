<template>
    <div class="section">
        <div class="grid grid-cols-[repeat(auto-fit,_minmax(360px,_1fr))] gap-8">
            <DashboardCard 
                v-for="(card, i) in cards"
                :key="i"
                :title="card.title"
                :subtitle="card.subtitle"
                :value="card.value"
                :change="card.change"
            />
        </div>
        <!-- TODO: Dashboard Chart -->
        <div class="mt-10 w-full flex gap-8">
            <!-- Left -->
            <div class="flex-[2] py-6 px-3 rounded-[10px] border border-gray1">
                <div class="flex items-center justify-between">
                    <div>
                        <h5 class="font-semibold text-lg">Sales Analytics</h5>
                        <span class="text-[#606060] text-[12px] leading-4 -tracking-[1%]">
                            Sales total for product Tokokami
                        </span>
                    </div>
                    <div class="border border-gray1 rounded-[10px] px-3 py-2 flex items-center gap-x-2">
                        <span class="text-[#6C7278] text-[12px] font-normal">This month</span>
                        <Icon name="iconamoon:arrow-down-2-light" width="11" height="5"  style="color: #292D32" />
                    </div>
                </div>
                <div class="mt-5">
                    <ChartStackedColumn />
                </div>
            </div>

            <!-- Right -->
            <!-- rounded-[10px] bg-[#04070E] -->
            <div class="p-4 w-[360px]  rounded-[10px] bg-[#04070E]">
                <Carousel 
                    :autoplay="2000" 
                    :items-to-show="1"
                >
                    <Slide v-for="slide in carouselItems" :key="slide.id">
                        <div class="w-full">
                            <img :src="slide.src" class="w-full h-[203px]" alt="">
                            <div class="mt-8">
                                <span class="text-white text-2xl font-bold">Todays top selling product</span>
                                <p class="text-white mt-1 text-md">
                                    Experience the future of retail with our 
                                    user-friendly POS platform. Increase
                                </p>
                            </div>
                        </div>
                    </Slide>

                    <template #addons>
                        <Pagination />
                    </template>
                </Carousel>
            </div>
        </div>

        <!-- TODO: Dashboard Table -->
        <div class="mt-10 p-6 rounded-[10px] bg-white border border-gray1">
            <div class="flex items-center justify-between">
                <span class="font-bold text-xl">Recent Transactions</span>
                <div class="flex gap-2">
                    <InputSearchField
                        v-model="searchTerm"
                        placeholder="Search..."
                    />
                    <div class=" border rounded-[10px] border-gray1 h-[40px] w-[40px] flex items-center justify-center">
                        <Icon name="fe:equalizer" width="18" height="18"  style="color: #1A1C1E" />
                    </div>
                </div>
            </div>
            <div class="mt-8">
                <EasyDataTable
                    v-model:items-selected="itemsSelected"
                    theme-color="#C95D2F"
                    table-class-name="customize-table"
                    :headers="headers"
                    :items="items"
                    show-index-symbol="S/N"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Header, Item } from "vue3-easy-data-table";

const dialog = useDialogStore();
const searchTerm = ref("")

const cards = [
    {
        title: "Total Sales",
        subtitle: "Valuable product on Tokokami",
        value: "$36,254",
        change: "+ $ 238,28 than last month",
    },
    {
        title: "Total Expenses",
        subtitle: "Valuable product on Tokokami",
        value: "$36,254",
        change: "+ $ 238,28 than last month",
    },
    {
        title: "Payment Received",
        subtitle: "Valuable product on Tokokami",
        value: "$36,254",
        change: "+ $ 238,28 than last month",
    },
];

const carouselItems = [
    {
        id: 1,
        src: "/img/dash-img.png",
    },
    {
        id: 2,
        src: "/img/dash-img.png",
    },
]

const breakpoints = {
  // 600px and up
  600: {
    itemsToShow: 1,
    snapAlign: "center",
  },
  // 1024 and up
//   1024: {
//     itemsToShow: 3,
//     snapAlign: "start",
//   },
};

const settings = {
    itemsToShow: 1,
    snapAlign: "center",
}

const headers: Header[] = [
  { text: "PLAYER", value: "player" },
  { text: "TEAM", value: "team"},
  { text: "NUMBER", value: "number"},
  { text: "POSITION", value: "position"},
  { text: "HEIGHT", value: "indicator.height"},
  { text: "WEIGHT (lbs)", value: "indicator.weight", sortable: true},
  { text: "LAST ATTENDED", value: "lastAttended", width: 200},
  { text: "COUNTRY", value: "country"},
];

const items: Item[] = [
  { player: "Stephen Curry", team: "GSW", number: 30, position: 'G', indicator: {"height": '6-2', "weight": 185}, lastAttended: "Davidson", country: "USA"},
  { player: "Lebron James", team: "LAL", number: 6, position: 'F', indicator: {"height": '6-9', "weight": 250}, lastAttended: "St. Vincent-St. Mary HS (OH)", country: "USA"},
  { player: "Kevin Durant", team: "BKN", number: 7, position: 'F', indicator: {"height": '6-10', "weight": 240}, lastAttended: "Texas-Austin", country: "USA"},
  { player: "Giannis Antetokounmpo", team: "MIL", number: 34, position: 'F', indicator: {"height": '6-11', "weight": 242}, lastAttended: "Filathlitikos", country: "Greece"},
];

const itemsSelected = ref<Item[]>([]);


</script>

<style>
</style>