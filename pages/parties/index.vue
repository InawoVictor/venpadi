<template>
    <div class="section">
        <div class="grid grid-cols-[repeat(auto-fit,_minmax(360px,_1fr))] gap-5">
            <StatsCard v-for="(card, i) in cards"
                :key="i"
                :title="card.title"
                :stats="card.stats"
                :icon="card.icon"
                :cardIndex="card.cardIndex"
            />
        </div>

        <!-- TODO: Dashboard Table -->
        <div class="mt-10 p-6 rounded-[10px] bg-white border border-gray1">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-x-3">
                    <button 
                        v-ripple
                        class="btn bg-primary text-white border border-primary-darken-2
                        shadow-[0px_-3px_2px_0px_rgba(225,97,25,1)_inset] flex
                        items-center gap-x-2
                        "
                    >
                        <Icon name="ph:plus-bold" width="16" height="16"  style="color: white" />
                        <span class="text-md font-bold">Add New Customer</span>
                    </button>
                    <button 
                        class="btn bg-info text-white border border-info-darken-2
                        shadow-[0px_-3px_2px_0px_rgba(77,129,231,1)_inset] flex
                        items-center gap-x-2
                        "
                    >
                        <img src="/svg/import.svg" alt="">
                        <span class="text-md font-bold">Import Customers</span>
                    </button>
                    <button 
                        class="btn bg-dark text-white border border-dark-darken-2
                        shadow-[0px_-3px_2px_0px_rgba(26,28,30,1)_inset] flex
                        items-center gap-x-2
                        "
                    >
                        <img src="/svg/export.svg" alt="">
                        <span class="text-md font-bold">Export Customers</span>
                    </button>
                </div>
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
                    show-index
                    show-index-symbol="S/N"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Header, Item } from "vue3-easy-data-table";

const cards = [
    {
        title: "Total No. of customers",
        stats: 150,
        icon: "/svg/box-primary.svg",
        cardIndex: 0,
    },
    {
        title: "Total Active Customers",
        stats: 6,
        icon: "/svg/file.svg",
        cardIndex: 1,
    },
    {
        title: "Total Balance",
        stats: 543,
        icon: "/svg/doc-text.svg",
        cardIndex: 2,
    },
]

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

//const itemsSelected = ref<[]>([]);
</script>