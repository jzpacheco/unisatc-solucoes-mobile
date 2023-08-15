package com.example.assessorcervejeiro

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.Spinner
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val findBeer = findViewById<Button>(R.id.find_beer)

        findBeer.setOnClickListener{
            //Pega a referência ao spinner
            val beerColor = findViewById<Spinner>(R.id.beer_color)

            //Pega o item selecionado
            val color = beerColor.selectedItem

            val beerList = getBeers(color.toString())
            val beers = beerList.reduce { str, item -> str+"\n" + item }

            //Pega a referência ao texto exibido na tela
            val brands = findViewById<TextView>(R.id.brands)
            //Atualiza o text exibido em tela
            brands.text = beers
        }
    }

    fun getBeers(color: String): List<String>{
        return when (color){
            "Clara" -> listOf("Blond Belga", "American Larger")
            "Ambar" -> listOf("Patagonia Ambar", "Red Moose")
            "Brown" -> listOf("Brown Bear Beer", "Bock Brownie")
            else -> listOf("Gout Stout","Carvoeira")
        }
    }
}