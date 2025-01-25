ServerEvents.recipes(event => {
    remove_recipes_type(event, [
        "twilightforest:uncrafting_table",
        "ad_astra:compressing",
        "ad_astra:refining",
        "ad_astra:compressing",
        "ad_astra:alloying",
        "ad_astra:cryo_freezing",
    ])
    remove_recipes_id(event, [
        "create:pressing/iron_ingot",
        "create:crafting/materials/andesite_alloy_from_zinc",
        "create:crafting/materials/andesite_alloy",
        "farmersdelight:paper_from_tree_bark",
        "create:pressing/sugar_cane",
        "create:crafting/kinetics/water_wheel",
        "create:crafting/kinetics/large_water_wheel",
        "create:crafting/kinetics/mechanical_drill",
        "gtceu:shapeless/dust_brass",
        "gtceu:shapeless/dust_bronze",
        "gtceu:shapeless/potin_dust",
        "create:crafting/kinetics/mechanical_mixer",
        "create:crafting/materials/rose_quartz",
        "create:crafting/materials/electron_tube",
        "create:crafting/materials/copper_ingot",
        "create:crafting/kinetics/deployer",
        "create:crafting/kinetics/contraption_controls",
        "create:crafting/appliances/slime_ball",
        "create:mechanical_crafting/crushing_wheel",
        "create_new_age:shaped/redstone_magnet",
        "create_new_age:shapeless/energiser_t1",
        "minecraft:lightning_rod",
        "create_new_age:pressing/overcharged_gold",
        "create_new_age:pressing/overcharged_iron",
        "enderio:void_chassis",
        "gtceu:shaped/vacuum_tube",
        "gtceu:shaped/steam_turbine_lv",
        "tfmg:sequenced_assembly/steel_mechanism",
        "tfmg:sequenced_assembly/turbine_engine",
        "tfmg:distillation/heavy_oil",
        "create:milling/charcoal",
        "botania:mana_fluxfield",
        "gtceu:shapeless/iron_magnetic_stick",
        "alexscaves:azure_neodymium_ingot",
        "alexscaves:scarlet_neodymium_ingot",
        "create:crafting/kinetics/mechanical_bearing",
        "biomesoplenty:tnt_from_bop_sand",
        "mynethersdelight:tnt_alt",
        "expandedstorage:obsidian_to_netherite_conversion_kit",
        "enderio:alloy_smelting/pulsating_alloy_ingot",
        "enderio:alloy_smelting/vibrant_alloy_ingot",
        "enderio:alloy_smelting/copper_alloy_ingot",
        "enderio:alloy_smelting/redstone_alloy_ingot",
        "enderio:alloy_smelting/end_steel_ingot",
        "enderio:alloy_smelting/dark_steel_ingot",
        "enderio:alloy_smelting/conductive_alloy_ingot",
        "tetranichematerials:red_gold_powder",
        "gtceu:shaped/steam_turbine_mv",
        "gtceu:shaped/steam_turbine_hv",
        "enderio:copper_ingot_from_smelting",
        "tetranichematerials:copper_ingot_from_powder_smelting",
        "bloodmagic:smelting/ingot_copper",
        "tetranichematerials:copper_ingot_from_powder_blasting",
        "bloodmagic:smelting/blasting_ingot_copper",
        "enderio:iron_ingot_from_blasting",
        "tetranichematerials:iron_ingot_from_powder_blasting",
        "bloodmagic:smelting/ingot_iron",
        "enderio:iron_ingot_from_smelting",
        "tetranichematerials:iron_ingot_from_powder_smelting",
        "enderio:gold_ingot_from_smelting",
        "tetranichematerials:gold_ingot_from_powder_smelting",
        "bloodmagic:smelting/ingot_gold",
        "bloodmagic:smelting/blasting_ingot_gold",
        "tetranichematerials:gold_ingot_from_powder_blasting",
        "tetranichematerials:steel_ingot_from_powder_blasting",
        "tetranichematerials:steel_powder",
        "extendedcrafting:handheld_table",
        "create_new_age:shaped/layered_magnet",
        "enderio:stick",
        "enderio:wood_gear",
        "enderio:wood_gear_corner",
        "enderio:stirling_generator",
        "minecraft:iron_trapdoor",
        "create:mixing/brass_ingot",
        "ad_astra:wrench",
        "gtceu:combustion_generator/raw_oil",
        "createdieselgenerators:basin_fermenting/fermented_spider_eye",
        "createoreexcavation:vein_finder",
        "functionalstorage:oak_drawer_alternate_x1",
        "functionalstorage:oak_drawer_alternate_x2",
        "functionalstorage:oak_drawer_alternate_x4",
        "javd:portal_block",
        "tetranichematerials:grave_steel_ingot",
        "create_new_age:shaped/netherite_magnet",
        "create_new_age:shaped/fluxuated_magnetite",
        "gtceu:assembler/oak_stairs",
        "gtceu:assembler/spruce_stairs",
        "gtceu:assembler/birch_stairs",
        "gtceu:assembler/jungle_stairs",
        "gtceu:assembler/acacia_stairs",
        "gtceu:assembler/dark_oak_stairs",
        "gtceu:assembler/mangrove_stairs",
        "gtceu:assembler/cherry_stairs",
        "gtceu:assembler/bamboo_stairs",
        "gtceu:assembler/crimson_stairs",
        "gtceu:assembler/warped_stairs",
        "enderio:void_chassis",
        "hostilenetworks:sim_chamber",
        "hostilenetworks:loot_fabricator",
        "hostilenetworks:deep_learner",
        "hostilenetworks:framework",
        "ae2things:cells/disk_drive_1k",
        "aether:aether_saddle"
    ])
    remove_recipes_output(event, [
        "create:cart_assembler",
        "create:portable_storage_interface",
        "create:rotation_speed_controller",
        "create:belt_connector",
        "angelblockrenewed:angel_block",
        "create:goggles",
        "tetranichematerials:lockwood_ingot",
        "create:shaft",
        "create:encased_fan",
        "create:windmill_bearing",
        "create:depot",
        "create:mechanical_press",
        "create:large_cogwheel",
        "create_new_age:carbon_brushes",
        "create_new_age:generator_coil",
        "tfmg:screw",
        "create:spout",
        "tfmg:turbine_blade",
        "thermal:constantan_ingot",
        "create:cogwheel",
        "create:millstone",
        "enderio:soularium_ingot",
        "enderio:energetic_alloy_ingot",
        "ad_astra:desh_fluid_pipe",
        "ad_astra:ostrum_fluid_pipe",
        "ad_astra:fluid_pipe_duct"
    ])
    remove_recipes_input(event, [
        "thermal:constantan_ingot",
    ])

    event.remove({ id: /thermal:parts(.*)_gear/ })
    event.remove({ output: /botania:apothecary_(.*)/ })
    event.remove({ output: /gtceu:(.*)_gem/, type: "minecraft:crafting_shapeless", input: /gtceu:flawless_(.*)_gem/ })
    event.remove({ type: "create:mixing", output: "create:andesite_alloy" })
    event.remove({ output: "#forge:plates", type: "minecraft:crafting_shaped" })
    event.remove({ output: "#forge:chipped_gems", type: "minecraft:crafting_shapeless" })
    event.remove({ output: "#forge:flawed_gems", type: "minecraft:crafting_shapeless" })
    event.remove({ output: "#forge:flawless_gems", type: "minecraft:crafting_shapeless" })
    event.remove({ output: "#forge:exquisite_gems", type: "minecraft:crafting_shapeless" })
    event.remove({ mod: "ad_astra", type: "minecraft:smelting", output: "#forge:ingots" })
    event.remove({ mod: "ad_astra", type: "minecraft:smelting", output: "#forge:gems" })
    event.remove({ mod: "ad_extendra", type: "minecraft:smelting", output: "#forge:ingots" })
    event.remove({ mod: "ad_extendra", type: "minecraft:smelting", output: "#forge:gems" })
    event.remove({ mod: "createmetallurgy", not: { type: "createmetallurgy:belt_grinder" } })
    event.remove({ mod: "aether", type: "minecraft:crafting_shaped", id: /aether:skyroot_(.*)/ })
    event.remove({ id: "gtceu:large_chemical_reactor/raw_palladium_separation" })
    event.remove({ id: "gtceu:electrolyzer/decomposition_electrolyzing_pyrochlore" })
    event.remove({ id: "gtceu:electrolyzer/decomposition_electrolyzing_tantalite" })
    event.remove({ id: "gtceu:electrolyzer/decomposition_electrolyzing_niobium_oxide" })
    event.remove({ id: "gtceu:electrolyzer/decomposition_electrolyzing_tantalite_oxide" })
    event.remove({ id: "gtceu:centrifuge/rare_earth_separation" })
    event.remove({ id: "gtceu:shaped/casing_hsse_sturdy" })
    event.remove({ id: "gtceu:assembler/casing_hsse_sturdy" })
    event.remove({ id: "gtceu:shaped/diamond_sword" })
    event.remove({ id: "gtceu:electric_blast_furnace/titanium_from_tetrachloride" })
    event.remove({ id: "gtceu:chemical_reactor/titaniumtetrachloride" })
    event.remove({ id: "gtceu:electrolyzer/tungstic_acid_electrolysis" })
    event.remove({ id: "gtceu:mixer/graphene" })
    event.remove({ id: "gtceu:create_mixer/graphene" })
    event.remove({ id: "ars_nouveau:novice_spell_book" })
    event.remove({ id: "gtceu:neutron_activator/naquadah" })
    event.remove({ id: "gtceu:large_chemical_reactor/iridium_chloride" })
    event.remove({ id: "gtceu:large_chemical_reactor/iridium_dioxide_dissolving" })
    event.remove({ id: "gtceu:electric_blast_furnace/iridium_metal_residue_processh" })
    event.remove({ id: "gtceu:centrifuge/iridium_metal_residue_separation" })
    event.remove({ id: "gtceu:chemical_reactor/iridium_chloride" })
    event.remove({ id: "gtceu:large_chemical_reactor/iridium_chloride_separation" })
    event.remove({ id: "gtceu:large_chemical_reactor/raw_platinum_separation" })
    event.remove({ id: "gtceu:chemical_reactor/raw_platinum_separation" })
    event.remove({ id: "gtceu:electric_blast_furnace/refined_platinum_salt_dust_ebf" })
    event.remove({ id: "gtceu:electric_blast_furnace/iridium_metal_residue_process" })
})
